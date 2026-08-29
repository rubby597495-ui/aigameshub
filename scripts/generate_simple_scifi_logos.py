import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/logos', exist_ok=True)
artifact_dir = r'C:\Users\Mayn\.gemini\antigravity\brain\05acaadb-8d24-4b32-810b-27069f1d28e0'
os.makedirs(artifact_dir, exist_ok=True)

# Helper: Draw starburst spark
def draw_spark(draw, cx, cy, radius, color=(255, 255, 255, 255)):
    pts = [
        (cx, cy - radius),
        (cx + radius * 0.22, cy - radius * 0.22),
        (cx + radius, cy),
        (cx + radius * 0.22, cy + radius * 0.22),
        (cx, cy + radius),
        (cx - radius * 0.22, cy + radius * 0.22),
        (cx - radius, cy),
        (cx - radius * 0.22, cy - radius * 0.22),
    ]
    draw.polygon(pts, fill=color)

# =========================================================================
# 1. OPTION 1: Neon Pulse Minimalist Controller (极简霓虹光弧手柄)
# =========================================================================
def gen_simple_1(size=512):
    img = Image.new('RGBA', (size, size), (10, 14, 18, 255))
    cx, cy = size // 2, size // 2

    # Subtle cyan soft ambient glow
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx - 150, cy - 120, cx + 150, cy + 120], fill=(0, 240, 255, 75))
    glow = glow.filter(ImageFilter.GaussianBlur(40))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Ultra-clean single continuous contour of a futuristic controller
    # Outer stroke (Cyan glow)
    gp_w, gp_h = 280, 160
    gp_l, gp_t = cx - gp_w / 2, cy - gp_h / 2
    
    # Clean ergonomic shape
    draw.rounded_rectangle([gp_l, gp_t, gp_l + gp_w, gp_t + gp_h], radius=50, fill=(16, 23, 30, 255), outline=(0, 240, 255, 255), width=8)

    # 2 Sleek Minimalist Controls (Left: Neon cross, Right: Neon Pill/Dot)
    lx = cx - 75
    draw.rounded_rectangle([lx - 5, cy - 20, lx + 5, cy + 20], radius=3, fill=(0, 240, 255, 255))
    draw.rounded_rectangle([lx - 20, cy - 5, lx + 20, cy + 5], radius=3, fill=(0, 240, 255, 255))

    rx = cx + 75
    draw.ellipse([rx - 10, cy - 10, rx + 10, cy + 10], fill=(0, 255, 178, 255))
    draw.ellipse([rx + 24 - 7, cy - 7, rx + 24 + 7, cy + 7], fill=(0, 240, 255, 255))

    # Center Pure AI Nova Spark
    draw_spark(draw, cx, cy, 38, (255, 255, 255, 255))
    draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(0, 240, 255, 255))
    return img

# =========================================================================
# 2. OPTION 2: Sci-Fi Quantum Delta / Prism (极简赛博能量三角 / 前进晶体)
# =========================================================================
def gen_simple_2(size=512):
    img = Image.new('RGBA', (size, size), (10, 12, 18, 255))
    cx, cy = size // 2, size // 2

    # Emerald / Cyan ambient aura
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx - 140, cy - 140, cx + 140, cy + 140], fill=(0, 255, 178, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(38))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Ultra-bold Sci-Fi Delta Arrow / Play / A shape
    top_pt = (cx, cy - 140)
    right_pt = (cx + 130, cy + 110)
    left_pt = (cx - 130, cy + 110)

    # Draw pure bold geometric triangle with hollow core
    draw.polygon([top_pt, right_pt, left_pt], fill=(16, 24, 32, 255), outline=(0, 255, 178, 255), width=10)

    # Inner Inverted Triangle (Laser Cut)
    inner_top = (cx, cy + 40)
    inner_l = (cx - 55, cy - 50)
    inner_r = (cx + 55, cy - 50)
    draw.polygon([inner_top, inner_r, inner_l], fill=(0, 240, 255, 255))

    # Center floating AI Star
    draw_spark(draw, cx, cy - 5, 20, (255, 255, 255, 255))
    return img

# =========================================================================
# 3. OPTION 3: Infinite Loop Cyber Pad (无限循环 AI 纽带手柄)
# =========================================================================
def gen_simple_3(size=512):
    img = Image.new('RGBA', (size, size), (10, 13, 20, 255))
    cx, cy = size // 2, size // 2

    # Purple/Cyan aura
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx - 160, cy - 100, cx + 160, cy + 100], fill=(0, 240, 255, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(35))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Two Interconnected Infinity Rings forming a controller
    r = 85
    lx, ly = cx - 75, cy
    rx, ry = cx + 75, cy
    
    # Left ring (Emerald/Cyan)
    draw.ellipse([lx - r, ly - r, lx + r, ly + r], fill=(15, 22, 32, 255), outline=(0, 255, 178, 255), width=9)
    # Right ring
    draw.ellipse([rx - r, ry - r, rx + r, ry + r], fill=(15, 22, 32, 255), outline=(0, 240, 255, 255), width=9)

    # Center Intersection AI Spark
    draw_spark(draw, cx, cy, 32, (255, 255, 255, 255))
    draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=(0, 240, 255, 255))

    # Clean Left D-pad dot & Right Action dot
    draw.ellipse([lx - 12, ly - 12, lx + 12, ly + 12], fill=(0, 255, 178, 255))
    draw.ellipse([rx - 12, ry - 12, rx + 12, ry + 12], fill=(0, 240, 255, 255))
    return img

# =========================================================================
# 4. OPTION 4: Cyber Hexagon AI Core (极简六边形智能力场)
# =========================================================================
def gen_simple_4(size=512):
    img = Image.new('RGBA', (size, size), (8, 12, 16, 255))
    cx, cy = size // 2, size // 2

    # Soft Cyan Aura
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], fill=(0, 240, 255, 75))
    glow = glow.filter(ImageFilter.GaussianBlur(38))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Bold Clean Hexagon
    hex_r = 150
    pts = [(cx + hex_r * math.cos(math.radians(a)), cy + hex_r * math.sin(math.radians(a))) for a in range(30, 390, 60)]
    draw.polygon(pts, fill=(16, 24, 30, 255), outline=(0, 240, 255, 255), width=9)

    # Central Minimalist Geometric Gamepad Arrow
    d_w, d_h = 70, 70
    draw.line([(cx - 70, cy), (cx + 70, cy)], fill=(0, 255, 178, 255), width=8)
    draw.line([(cx, cy - 70), (cx, cy + 70)], fill=(0, 255, 178, 255), width=8)

    # Center Pure AI White Dot
    draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=(255, 255, 255, 255), outline=(0, 240, 255, 255), width=4)
    return img

# =========================================================================
# 5. OPTION 5: Minimalist Dual Cyber Handles & Nova Core (极简双翼手柄 × 超新星)
# =========================================================================
def gen_simple_5(size=512):
    img = Image.new('RGBA', (size, size), (10, 12, 16, 255))
    cx, cy = size // 2, size // 2

    # Aura
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx - 140, cy - 140, cx + 140, cy + 140], fill=(0, 255, 178, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(36))
    img = Image.alpha_composite(img, glow)

    draw = ImageDraw.Draw(img)

    # Left Ergonomic Handle Arc (Pill Shape)
    h_w, h_h = 50, 160
    lx = cx - 110
    draw.rounded_rectangle([lx - h_w/2, cy - h_h/2, lx + h_w/2, cy + h_h/2], radius=25, fill=(18, 26, 32, 255), outline=(0, 240, 255, 255), width=8)

    # Right Ergonomic Handle Arc (Pill Shape)
    rx = cx + 110
    draw.rounded_rectangle([rx - h_w/2, cy - h_h/2, rx + h_w/2, cy + h_h/2], radius=25, fill=(18, 26, 32, 255), outline=(0, 255, 178, 255), width=8)

    # Connecting Laser Beam
    draw.line([(lx + h_w/2, cy), (rx - h_w/2, cy)], fill=(0, 240, 255, 180), width=6)

    # Center Pure Nova Starburst (The AI Entity)
    draw_spark(draw, cx, cy, 48, (255, 255, 255, 255))
    draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(0, 255, 178, 255))

    return img

ops = [
    ('option_1.png', gen_simple_1),
    ('option_2.png', gen_simple_2),
    ('option_3.png', gen_simple_3),
    ('option_4.png', gen_simple_4),
    ('option_5.png', gen_simple_5)
]

for name, fn in ops:
    img = fn(512)
    img.save(os.path.join('public/logos', name), 'PNG')
    img.save(os.path.join(artifact_dir, name), 'PNG')
    print(f'Rendered Minimal Sci-Fi Logo: {name}')

print('ALL_MINIMAL_SCIFI_LOGOS_RENDERED')
