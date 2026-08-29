import os
from PIL import Image, ImageDraw

os.makedirs('public/logos', exist_ok=True)
artifact_dir = r'C:\Users\Mayn\.gemini\antigravity\brain\05acaadb-8d24-4b32-810b-27069f1d28e0'
os.makedirs(artifact_dir, exist_ok=True)

# Helper: Draw starburst spark
def draw_spark(draw, cx, cy, radius, color=(2, 132, 199, 255)):
    pts = [
        (cx, cy - radius),
        (cx + radius * 0.25, cy - radius * 0.25),
        (cx + radius, cy),
        (cx + radius * 0.25, cy + radius * 0.25),
        (cx, cy + radius),
        (cx - radius * 0.25, cy + radius * 0.25),
        (cx - radius, cy),
        (cx - radius * 0.25, cy - radius * 0.25),
    ]
    draw.polygon(pts, fill=color)

def gen_option_5_large(size=512):
    # Clean soft ice-gray canvas
    img = Image.new('RGBA', (size, size), (243, 244, 246, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame (fills canvas nicely)
    margin = int(size * 0.03)
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=int(size * 0.20),
        fill=(255, 255, 255, 255),
        outline=(209, 213, 219, 255),
        width=4
    )

    # 1. Large Bold Stylized Capital "A" (Play Triangle) in Deep Indigo (#1E1B4B)
    # Enlarged coordinates:
    top_y = cy - 180
    bottom_y = cy + 155
    outer_w = 175
    inner_w = 100
    
    a_pts = [
        (cx, top_y),
        (cx + outer_w, bottom_y),
        (cx + inner_w, bottom_y),
        (cx, cy - 35),
        (cx - inner_w, bottom_y),
        (cx - outer_w, bottom_y)
    ]
    draw.polygon(a_pts, fill=(30, 27, 75, 255))

    # 2. Large Blue Joypad Crossbar (#0284C7)
    bar_w = 135
    bar_h = 24
    bar_y = cy + 35
    draw.rounded_rectangle([cx - bar_w, bar_y - bar_h, cx + bar_w, bar_y + bar_h], radius=10, fill=(2, 132, 199, 255))

    # 3. Large Center Floating Joystick Orb in Pure White & Sky Blue
    orb_r = 45
    orb_y = cy - 40
    draw.ellipse([cx - orb_r, orb_y - orb_r, cx + orb_r, orb_y + orb_r], fill=(255, 255, 255, 255), outline=(2, 132, 199, 255), width=7)
    
    # 4. Center AI Star Spark
    draw_spark(draw, cx, orb_y, 25, (2, 132, 199, 255))
    draw.ellipse([cx - 5, orb_y - 5, cx + 5, orb_y + 5], fill=(30, 27, 75, 255))

    return img

# Generate 512x512
img = gen_option_5_large(512)

# Save to public/logos/option_5.png
img.save('public/logos/option_5.png', 'PNG')
img.save(os.path.join(artifact_dir, 'option_5.png'), 'PNG')

# Save to public/logo.png and apple-touch-icon.png
img.save('public/logo.png', 'PNG')
img.save('public/apple-touch-icon.png', 'PNG')

# Generate multi-res favicon.ico
icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
icons = [img.resize(s, Image.Resampling.LANCZOS) for s in icon_sizes]
icons[0].save('public/favicon.ico', format='ICO', sizes=icon_sizes, append_images=icons[1:])

print('Option 5 (Large Size) generated and applied to PNG & ICO successfully!')
