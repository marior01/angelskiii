from PIL import Image
import numpy as np

img = Image.open("images/logo.png").convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Видаляємо темні пікселі (фон — чорний/темно-сірий)
# Пікселі де всі канали < 80 стають прозорими
dark = (r < 80) & (g < 80) & (b < 80)
data[:,:,3] = np.where(dark, 0, a)

# Плавний перехід для пікселів 80-130
mid = (r < 130) & (g < 130) & (b < 130) & ~dark
brightness = ((r.astype(int) + g.astype(int) + b.astype(int)) / 3).astype(np.uint8)
data[:,:,3] = np.where(mid, brightness * 2, data[:,:,3])

result = Image.fromarray(data)
result.save("images/logo.png", "PNG")
print("Готово! Фон видалено.")
