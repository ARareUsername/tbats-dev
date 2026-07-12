import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PresetProvider, usePresetContext } from '../demo/context/PresetContext';
import { CartProvider } from '../demo/context/CartContext';
import DemoLayout from '../demo/components/Layout/DemoLayout';
import CartDrawer from '../demo/components/Cart/CartDrawer';
import CheckoutModal from '../demo/components/Checkout/CheckoutModal';
import Toaster from '../demo/components/UI/Toaster';

import projectPresets from '../demo/data/projectPresets';
import products from '../demo/data/products';
import articles from '../demo/data/articles';
import portfolioItems from '../demo/data/portfolioItems';
import categories from '../demo/data/categories';
import { ComponentMap } from '../demo/components';

function SamplerContent() {
  const { projectId } = useParams();
  const { activePreset } = usePresetContext();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Look up project details
  const projectInfo = projectPresets[projectId] || { name: 'E-Commerce Sampler' };

  // SEO Update
  useEffect(() => {
    document.title = `${projectInfo.name} Live Demo - TBATS Studio`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `Explore the interactive sandbox for ${projectInfo.name}. Test drive design presets, switch layouts, and experience modern layout capabilities.`;
  }, [projectId, projectInfo.name]);

  // Reset category filter when switching between sampler pages
  useEffect(() => {
    setActiveCategory('all');
  }, [projectId]);

  // Handle escape key to close checkout modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCheckoutOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resolve dynamic components
  const HeaderComponent = ComponentMap[activePreset.components.Header];
  const HeroComponent = ComponentMap[activePreset.components.Hero];
  const CategoryBarComponent = ComponentMap[activePreset.components.CategoryBar];
  const GridComponent = ComponentMap[activePreset.components.ProductGrid];
  const CardComponent = ComponentMap[activePreset.components.ProductCard];
  const FooterComponent = ComponentMap[activePreset.components.Footer];

  // Resolve layout context based on projectId
  let activeItems = products;
  let activeCategories = categories;

  if (projectId === 'personal-blog') {
    activeItems = articles;
    activeCategories = [
      { name: 'All Posts', slug: 'all' },
      { name: 'Design', slug: 'design' },
      { name: 'Technology', slug: 'technology' }
    ];
  } else if (projectId === 'portfolio') {
    activeItems = portfolioItems;
    activeCategories = [
      { name: 'All Work', slug: 'all' },
      { name: 'Branding', slug: 'branding' },
      { name: 'Development', slug: 'development' }
    ];
  }

  // Filter items by category
  const filteredItems = activeCategory === 'all'
    ? activeItems
    : activeItems.filter(item => item.category === activeCategory);

  return (
    <DemoLayout projectName={projectInfo.name}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activePreset.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          {/* 1. Header Variant */}
          {HeaderComponent && <HeaderComponent brandName={projectInfo.name} />}

          {/* 2. Hero Variant */}
          {HeroComponent && (
            <HeroComponent 
              title={
                projectId === 'personal-blog' 
                  ? 'Personal Editorial Journal.'
                  : projectId === 'portfolio'
                  ? 'Creative Studio Showcase.'
                  : `${projectInfo.name}. Instant Commerce.`
              }
              subtitle={
                projectId === 'personal-blog'
                  ? 'Exploring thoughts, codebase architecture, and modern UX design systems.'
                  : projectId === 'portfolio'
                  ? 'A curated portfolio of branding concepts and custom interactive web platform developments.'
                  : `Experience a fully-realized headless e-commerce store themed with the '${activePreset.label}' design preset.`
              }
              ctaText={
                projectId === 'personal-blog'
                  ? 'Read Latest Posts'
                  : projectId === 'portfolio'
                  ? 'Explore Projects'
                  : undefined
              }
            />
          )}

          {/* 3. Category Filter Bar */}
          <div className="demo-catalog-section" id="catalog">
            <div className="demo-catalog-container">
              {CategoryBarComponent && (
                <CategoryBarComponent 
                  activeCategory={activeCategory} 
                  onSelectCategory={setActiveCategory}
                  categories={activeCategories}
                />
              )}

              {/* 4. Product Grid + Cards */}
              {GridComponent && CardComponent ? (
                <GridComponent>
                  {filteredItems.map(item => (
                    <CardComponent key={item.id} product={item} type={projectId} />
                  ))}
                </GridComponent>
              ) : (
                <div className="demo-skeleton-grid">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="demo-skeleton-card">
                      <div className="demo-skeleton-image"></div>
                      <div className="demo-skeleton-title"></div>
                      <div className="demo-skeleton-price"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 5. Footer Variant */}
          {FooterComponent && <FooterComponent brandName={projectInfo.name} />}
        </motion.div>
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />

      {/* Checkout Stepper Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

      {/* Toast Notifications container */}
      <Toaster />
    </DemoLayout>
  );
}

export default function EcommerceSamplerPage() {
  const { projectId } = useParams();
  
  // Resolve default preset for the project
  const projectInfo = projectPresets[projectId];
  const defaultPresetId = projectInfo ? projectInfo.defaultPreset : 'minimal';

  return (
    <PresetProvider defaultPresetId={defaultPresetId}>
      <CartProvider>
        <SamplerContent />
      </CartProvider>
    </PresetProvider>
  );
}
