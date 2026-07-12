import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import styles from './Portfolio.module.css';

interface ProjectInfo {
  name: string;
  category: string;
  accentText: string;
  defaultPreset: 'minimal' | 'dark-luxury' | 'editorial' | 'bold' | 'playful';
  tags: string[];
  pitch: string;
}

interface PresetInfo {
  label: string;
  badge: string;
  colorText: string;
  typography: string;
  layout: string;
  swatches: string[];
  pitch: string;
}

const PROJECTS: Record<string, ProjectInfo> = {
  'personal-blog': {
    name: 'Personal Blog',
    category: 'Creative Blog',
    accentText: 'PB',
    defaultPreset: 'editorial',
    tags: ['Article Layouts', 'Dynamic Markdown', 'SEO Optimized'],
    pitch:
      'A clean, typography-focused blog designed for premium reading experiences and fast content delivery.',
  },
  'e-commerce': {
    name: 'E-Commerce Store',
    category: 'Headless Shop',
    accentText: 'EC',
    defaultPreset: 'minimal',
    tags: ['Headless Catalog', 'Fast Checkout', 'Pesos Pricing'],
    pitch:
      'A high-performance modern storefront optimized for fast product loading, dynamic inventory, and instant checkout.',
  },
  portfolio: {
    name: 'Creative Portfolio',
    category: 'Director Showcase',
    accentText: 'PF',
    defaultPreset: 'dark-luxury',
    tags: ['Creative Grid', 'Dark Aesthetics', 'Spring Motion'],
    pitch:
      'An immersive visual portfolio showcasing creative projects, photography, or case studies with premium layouts.',
  },
} as const;

const PRESETS: Record<string, PresetInfo> = {
  minimal: {
    label: 'Minimalist',
    badge: 'Standard Grids',
    colorText: 'Grayscale & Cobalt Accent',
    typography: 'Inter Sans',
    layout: '4-Column Grid Layout',
    swatches: ['#64748b', '#2563eb'],
    pitch:
      'An ultra-clean, speed-optimized interface utilizing spacious white grids, tight line heights, and high-contrast typography.',
  },
  'dark-luxury': {
    label: 'Dark Luxury',
    badge: 'Premium Gold',
    colorText: 'Deep Black & Rich Gold',
    typography: 'Playfair Display Serif & Inter',
    layout: 'Asymmetric Masonry Columns',
    swatches: ['#1c1917', '#d4af37'],
    pitch:
      'An elegant high-end storefront featuring serif headers, custom gold micro-accents, radial background overlays, and a dark canvas.',
  },
  editorial: {
    label: 'Editorial',
    badge: 'Classic Paper',
    colorText: 'Paper White & Emerald Highlights',
    typography: 'Playfair Display & Inter',
    layout: 'Asymmetric Editorial Columns',
    swatches: ['#f5f5f4', '#059669'],
    pitch:
      'Inspired by modern fashion journals. Combines soft textured backdrops, off-center headings, and elegant borders.',
  },
  bold: {
    label: 'Bold',
    badge: 'Neo-Brutalist',
    colorText: 'Pure Black/White & Crimson Red',
    typography: 'Outfit Sans & Inter',
    layout: 'Thick-Border Grid Cards',
    swatches: ['#000000', '#dc2626'],
    pitch:
      'High-contrast neo-brutalist cards featuring thick solid outlines, hard dropshadow offsets, and bold graphic callouts.',
  },
  playful: {
    label: 'Playful',
    badge: 'Bubbly Pastels',
    colorText: 'Pastel Rose & Pink Accent',
    typography: 'Outfit Sans & Inter',
    layout: 'Soft Rounded Product Carousel',
    swatches: ['#fbcfe8', '#db2777'],
    pitch:
      'A friendly, bouncy interface using rounded pill-shapes, soft colorful gradient backdrops, and interactive animations.',
  },
} as const;

type ProjectKey = keyof typeof PROJECTS;
type PresetKey = keyof typeof PRESETS;

export default function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectKey>('personal-blog');
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>('editorial');

  const projectInfo = PROJECTS[selectedProject];
  const presetInfo = PRESETS[selectedPreset];

  // These are guaranteed to exist due to the state type constraints
  const currentProject = projectInfo!;
  const currentPreset = presetInfo!;

  // Combine tags for dynamic displaying
  const combinedTags = [...currentProject.tags, currentPreset.badge];

  return (
    <Section id="portfolio" className={styles.section}>
      <Container>
        {/* Header Section */}
        <div className={styles.header}>
          <span className={`text-accent ${styles.headerSubtitle}`}>Demo Console</span>
          <h2 className={`text-gradient ${styles.headerTitle}`}>Sandbox Launcher</h2>
          <p className={styles.headerDesc}>
            Configure and launch our headless website sandbox. Select a site profile and a styling
            preset to dynamically mount the demo client.
          </p>
        </div>

        {/* Launcher Control Deck Panel */}
        <Card className={styles.controlDeck}>
          {/* Left Column: Toggles & Inputs */}
          <div className={styles.leftColumn}>
            {/* 1. Select Business Identity */}
            <div>
              <span className={styles.stepTitle}>1. Select Website Type</span>
              <div className={styles.buttonList}>
                {(Object.entries(PROJECTS) as [ProjectKey, (typeof PROJECTS)[ProjectKey]][]).map(
                  ([key, project]) => {
                    const isSelected = selectedProject === key;
                    return (
                      <Button
                        key={key}
                        onClick={() => {
                          setSelectedProject(key);
                          setSelectedPreset(project.defaultPreset);
                        }}
                        className={[styles.projectBtn, isSelected ? styles.projectBtnSelected : '']
                          .filter(Boolean)
                          .join(' ')}
                      >
                        {/* Avatar/Badge */}
                        <div className={styles.projectAvatar}>{project.accentText}</div>

                        {/* Brand Name Details */}
                        <div>
                          <h4 className={styles.projectName}>{project.name}</h4>
                          <span className={styles.projectCategory}>{project.category}</span>
                        </div>
                      </Button>
                    );
                  }
                )}
              </div>
            </div>

            {/* 2. Select Styling Preset */}
            <div>
              <span className={styles.stepTitle}>2. Select Theme Preset</span>
              <div className={styles.buttonList}>
                {(Object.entries(PRESETS) as [PresetKey, (typeof PRESETS)[PresetKey]][]).map(
                  ([key, preset]) => {
                    const isSelected = selectedPreset === key;
                    return (
                      <Button
                        key={key}
                        onClick={() => setSelectedPreset(key)}
                        className={[styles.presetBtn, isSelected ? styles.presetBtnSelected : '']
                          .filter(Boolean)
                          .join(' ')}
                      >
                        {/* Swatch & Label */}
                        <div className={styles.presetSwatchWrapper}>
                          {/* Swatch Dots */}
                          <div className={styles.presetSwatches}>
                            {preset.swatches.map((color, sIdx) => (
                              <span
                                key={sIdx}
                                className={styles.presetSwatchDot}
                                style={{ background: color }}
                              />
                            ))}
                          </div>
                          <span className={styles.presetLabel}>{preset.label}</span>
                        </div>

                        {/* Badge */}
                        <span className={styles.presetBadge}>{preset.badge}</span>
                      </Button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Console Preview & Sandbox Trigger */}
          <div className={styles.rightColumn}>
            <span className={styles.stepTitle}>3. Interactive Deployment Review</span>

            {/* Dynamic Themed Specs Container */}
            <Card className={styles.specsContainer}>
              {/* Dynamic Information Display with AnimatePresence */}
              <AnimatePresence mode="wait">
                <m.div
                  key={`${selectedProject}_${selectedPreset}`}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                  transition={{ duration: prefersReducedMotion ? 0.15 : 0.25 }}
                  className={styles.specsWrapper}
                >
                  {/* Status Indicator */}
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>SANDBOX READY</span>
                  </div>

                  {/* Brand & Preset Heading */}
                  <div>
                    <h3 className={styles.previewTitle}>{currentProject.name}</h3>
                    <p className={styles.previewSubtitle}>
                      Initial State:{' '}
                      <strong className={styles.primaryText}>{currentPreset.label} Preset</strong>
                    </p>
                  </div>

                  {/* Description Paragraphs */}
                  <div className={styles.pitchWrapper}>
                    <p className={styles.projectPitch}>{currentProject.pitch}</p>
                    <p className={styles.presetPitch}>{currentPreset.pitch}</p>
                  </div>

                  {/* Technical Specifications */}
                  <div className={styles.techSpecs}>
                    <div>
                      <strong className={styles.primaryText}>Colors:</strong>{' '}
                      {currentPreset.colorText}
                    </div>
                    <div>
                      <strong className={styles.primaryText}>Typography:</strong>{' '}
                      {currentPreset.typography}
                    </div>
                    <div>
                      <strong className={styles.primaryText}>Grid Layout:</strong>{' '}
                      {currentPreset.layout}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className={styles.tagsList}>
                    {combinedTags.map(tag => (
                      <span key={tag} className={styles.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </m.div>
              </AnimatePresence>

              {/* Action Button: Launcher Trigger */}
              <Button
                as={Link}
                to={`/demo/${selectedProject}?preset=${selectedPreset}`}
                variant="primary"
                className={styles.launchBtn}
              >
                Launch Sandbox Demo
              </Button>
            </Card>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
