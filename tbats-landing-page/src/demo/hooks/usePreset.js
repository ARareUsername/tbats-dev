import { usePresetContext } from '../context/PresetContext';

export function usePreset() {
  const { activePreset, changePreset, presets } = usePresetContext();
  return { activePreset, changePreset, presets };
}
