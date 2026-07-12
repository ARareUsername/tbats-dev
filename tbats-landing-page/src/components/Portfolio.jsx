import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PROJECTS = {
  'personal-blog': {
    name: 'Personal Blog',
    category: 'Creative Blog',
    accentText: 'PB',
    defaultPreset: 'editorial',
    tags: ['Article Layouts', 'Dynamic Markdown', 'SEO Optimized'],
    pitch: 'A clean, typography-focused blog designed for premium reading experiences and fast content delivery.'
  },
  'e-commerce': {
    name: 'E-Commerce Store',
    category: 'Headless Shop',
    accentText: 'EC',
    defaultPreset: 'minimal',
    tags: ['Headless Catalog', 'Fast Checkout', 'Pesos Pricing'],
    pitch: 'A high-performance modern storefront optimized for fast product loading, dynamic inventory, and instant checkout.'
  },
  'portfolio': {
    name: 'Creative Portfolio',
    category: 'Director Showcase',
    accentText: 'PF',
    defaultPreset: 'dark-luxury',
    tags: ['Creative Grid', 'Dark Aesthetics', 'Spring Motion'],
    pitch: 'An immersive visual portfolio showcasing creative projects, photography, or case studies with premium layouts.'
  }
};

const PRESETS = {
  'minimal': {
    label: 'Minimalist',
    badge: 'Standard Grids',
    colorText: 'Grayscale & Cobalt Accent',
    typography: 'Inter Sans',
    layout: '4-Column Grid Layout',
    swatches: ['#64748b', '#2563eb'],
    pitch: 'An ultra-clean, speed-optimized interface utilizing spacious white grids, tight line heights, and high-contrast typography.'
  },
  'dark-luxury': {
    label: 'Dark Luxury',
    badge: 'Premium Gold',
    colorText: 'Deep Black & Rich Gold',
    typography: 'Playfair Display Serif & Inter',
    layout: 'Asymmetric Masonry Columns',
    swatches: ['#1c1917', '#d4af37'],
    pitch: 'An elegant high-end storefront featuring serif headers, custom gold micro-accents, radial background overlays, and a dark canvas.'
  },
  'editorial': {
    label: 'Editorial',
    badge: 'Classic Paper',
    colorText: 'Paper White & Emerald Highlights',
    typography: 'Playfair Display & Inter',
    layout: 'Asymmetric Editorial Columns',
    swatches: ['#f5f5f4', '#059669'],
    pitch: 'Inspired by modern fashion journals. Combines soft textured backdrops, off-center headings, and elegant borders.'
  },
  'bold': {
    label: 'Bold',
    badge: 'Neo-Brutalist',
    colorText: 'Pure Black/White & Crimson Red',
    typography: 'Outfit Sans & Inter',
    layout: 'Thick-Border Grid Cards',
    swatches: ['#000000', '#dc2626'],
    pitch: 'High-contrast neo-brutalist cards featuring thick solid outlines, hard dropshadow offsets, and bold graphic callouts.'
  },
  'playful': {
    label: 'Playful',
    badge: 'Bubbly Pastels',
    colorText: 'Pastel Rose & Pink Accent',
    typography: 'Outfit Sans & Inter',
    layout: 'Soft Rounded Product Carousel',
    swatches: ['#fbcfe8', '#db2777'],
    pitch: 'A friendly, bouncy interface using rounded pill-shapes, soft colorful gradient backdrops, and interactive animations.'
  }
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState('personal-blog');
  const [selectedPreset, setSelectedPreset] = useState('editorial');

  const projectInfo = PROJECTS[selectedProject];
  const presetInfo = PRESETS[selectedPreset];

  // Combine tags for dynamic displaying
  const combinedTags = [...projectInfo.tags, presetInfo.badge];

  return (
    <section id="portfolio" style={{ position: 'relative', padding: '6rem 0' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="text-accent" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Demo Console</span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }} className="text-gradient">Sandbox Launcher</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Configure and launch our headless website sandbox. Select a site profile and a styling preset to dynamically mount the demo client.
          </p>
        </div>

        {/* Launcher Control Deck Panel */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'var(--bubble-shadow)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Left Column: Toggles & Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 1. Select Business Identity */}
            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}>
                1. Select Website Type
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(PROJECTS).map(([key, project]) => {
                  const isSelected = selectedProject === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedProject(key);
                        setSelectedPreset(project.defaultPreset);
                      }}
                      style={{
                        background: isSelected ? 'var(--bg-card-hover)' : 'transparent',
                        border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        width: '100%'
                      }}
                    >
                      {/* Avatar/Badge */}
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: isSelected ? 'var(--text-primary)' : 'var(--bg-card)',
                        color: isSelected ? 'var(--bg-dark)' : 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-serif)',
                        transition: 'all 0.25s ease',
                        border: '1px solid var(--border-color)'
                      }}>
                        {project.accentText}
                      </div>

                      {/* Brand Name Details */}
                      <div>
                        <h4 style={{
                          fontSize: '1rem',
                          margin: 0,
                          fontWeight: 600,
                          color: 'var(--text-primary)'
                        }}>
                          {project.name}
                        </h4>
                        <span style={{
                          fontSize: '0.75rem',
                          color: isSelected ? 'var(--color-accent)' : 'var(--text-secondary)'
                        }}>
                          {project.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Styling Preset */}
            <div>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem'
              }}>
                2. Select Theme Preset
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(PRESETS).map(([key, preset]) => {
                  const isSelected = selectedPreset === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedPreset(key)}
                      style={{
                        background: isSelected ? 'var(--bg-card-hover)' : 'transparent',
                        border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '0.75rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        width: '100%',
                        textAlign: 'left'
                      }}
                    >
                      {/* Swatch & Label */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {/* Swatch Dots */}
                        <div style={{ display: 'flex', gap: '0.3rem' }}>
                          {preset.swatches.map((color, sIdx) => (
                            <span 
                              key={sIdx}
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: color,
                                border: '1px solid var(--border-color)',
                                display: 'inline-block'
                              }}
                            />
                          ))}
                        </div>
                        <span style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)'
                        }}>
                          {preset.label}
                        </span>
                      </div>

                      {/* Badge */}
                      <span style={{
                        fontSize: '0.7rem',
                        color: isSelected ? 'var(--color-accent)' : 'var(--text-secondary)',
                        background: 'var(--bg-card)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                        fontWeight: 600
                      }}>
                        {preset.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Console Preview & Sandbox Trigger */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}>
              3. Interactive Deployment Review
            </span>

            {/* Dynamic Themed Specs Container */}
            <div style={{
              flex: 1,
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Dynamic Information Display with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedProject}_${selectedPreset}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {/* Status Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--color-accent)',
                      boxShadow: '0 0 10px var(--color-accent)',
                      display: 'inline-block'
                    }}></span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.05em' }}>
                      SANDBOX READY
                    </span>
                  </div>

                  {/* Brand & Preset Heading */}
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500, margin: 0, color: 'var(--text-primary)' }}>
                      {projectInfo.name}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', marginBottom: 0 }}>
                      Initial State: <strong style={{ color: 'var(--text-primary)' }}>{presetInfo.label} Preset</strong>
                    </p>
                  </div>

                  {/* Description Paragraphs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                      {projectInfo.pitch}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5', borderLeft: '2px solid var(--color-accent)', paddingLeft: '0.75rem', opacity: 0.85 }}>
                      {presetInfo.pitch}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Colors:</strong> {presetInfo.colorText}
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Typography:</strong> {presetInfo.typography}
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Grid Layout:</strong> {presetInfo.layout}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                    {combinedTags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.7rem',
                          background: 'var(--bg-card)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button: Launcher Trigger */}
              <Link
                to={`/demo/${selectedProject}?preset=${selectedPreset}`}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem',
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 700
                }}
              >
                Launch Sandbox Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
