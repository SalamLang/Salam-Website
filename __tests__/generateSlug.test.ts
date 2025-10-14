import { generateSlug } from '../lib/utils/generateSlug';

describe('generateSlug', () => {
  it('should convert text to slug', () => {
    expect(generateSlug("Company Assets 2025!")).toBe("company-assets-2025");
  });

  it('should remove accents', () => {
    expect(generateSlug("¡Hola, cómo estás?")).toBe("hola-como-estas");
  });

  it('should handle multiple spaces', () => {
    expect(generateSlug("   JavaScript     Rocks   ")).toBe("javascript-rocks");
  });

  it('should handle unicode safely', () => {
    expect(generateSlug("Café con Leche 100%")).toBe("cafe-con-leche-100");
  });
});

