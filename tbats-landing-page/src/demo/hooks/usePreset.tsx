import { usePresetContext } from '../context/PresetContext';
import type { Preset, PresetId } from '../presets/registry';

export function usePreset(): {
  activePreset: Preset;
  changePreset: (_presetId: PresetId) => void;
  presets: readonly Preset[];
} {
  const { activePreset, changePreset, presets } = usePresetContext();
  return { activePreset, changePreset, presets };
}
