import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/logos', exist_ok=True)
artifact_dir = r'C:\Users\Mayn\.gemini\antigravity\brain\05acaadb-8d24-4b32-810b-27069f1d28e0'
os.makedirs(artifact_dir, exist_ok=True)

# Helper: Draw starburst spark
def draw_spark(draw, cx, cy, radius, color=(37, 99, 235, 255)):
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

# =========================================================================
# 1. OPTION 1: Titanium & Royal Cobalt Blue Gamepad (钛金灰 × 科技皇室蓝手柄)
# Clean crisp white/slate background, matte titanium finish, modern vector.
# =========================================================================
def gen_clean_1(size=512):
    # Pure clean light slate canvas
    img = Image.new('RGBA', (size, size), (248, 250, 252, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Rounded card frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=4)

    # Sleek Titanium Slate Controller Chassis (Deep Navy-Slate #0F172A)
    gp_w, gp_h = 280, 160
    draw.rounded_rectangle([cx - gp_w/2, cy - gp_h/2, cx + gp_w/2, cy + gp_h/2], radius=48, fill=(15, 23, 42, 255))

    # Cobalt Blue & Ice Cyan Geometric D-Pad and Buttons
    lx = cx - 75
    draw.rounded_rectangle([lx - 6, cy - 22, lx + 6, cy + 22], radius=3, fill=(37, 99, 235, 255))
    draw.rounded_rectangle([lx - 22, cy - 6, lx + 22, cy + 6], radius=3, fill=(37, 99, 235, 255))

    rx = cx + 75
    draw.ellipse([rx - 11, cy - 11, rx + 11, cy + 11], fill=(59, 130, 246, 255))
    draw.ellipse([rx + 24 - 8, cy - 8, rx + 24 + 8, cy + 8], fill=(96, 165, 250, 255))

    # Center Pure AI Spark in Clean White & Royal Blue
    draw_spark(draw, cx, cy, 36, (255, 255, 255, 255))
    draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=(37, 99, 235, 255))
    return img

# =========================================================================
# 2. OPTION 2: Apple-style Indigo Gradient & Minimalist AI Ring (苹果风双色渐变手柄)
# Soft platinum gray background, vibrant modern indigo/violet gradient.
# =========================================================================
def gen_clean_2(size=512):
    img = Image.new('RGBA', (size, size), (241, 245, 249, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(255, 255, 255, 255), outline=(203, 213, 225, 255), width=3)

    # Indigo-Violet Controller Outline (#6366F1 -> #4F46E5)
    gp_w, gp_h = 280, 165
    draw.rounded_rectangle([cx - gp_w/2, cy - gp_h/2, cx + gp_w/2, cy + gp_h/2], radius=50, fill=(79, 70, 229, 255))

    # Inner Soft Ice Blue Inset
    draw.rounded_rectangle([cx - gp_w/2 + 10, cy - gp_h/2 + 10, cx + gp_w/2 - 10, cy + gp_h/2 - 10], radius=40, fill=(238, 242, 255, 255))

    # Matte Deep Indigo Controls
    lx = cx - 72
    draw.rounded_rectangle([lx - 6, cy - 20, lx + 6, cy + 20], radius=3, fill=(79, 70, 229, 255))
    draw.rounded_rectangle([lx - 20, cy - 6, lx + 20, cy + 6], radius=3, fill=(79, 70, 229, 255))

    rx = cx + 72
    draw.ellipse([rx - 10, cy - 10, rx + 10, cy + 10], fill=(99, 102, 241, 255))
    draw.ellipse([rx + 22 - 7, cy - 7, rx + 22 + 7, cy + 7], fill=(129, 140, 248, 255))

    # Center Radiant AI Core
    draw.ellipse([cx - 26, cy - 26, cx + 26, cy + 26], fill=(79, 70, 229, 255))
    draw_spark(draw, cx, cy, 24, (255, 255, 255, 255))
    return img

# =========================================================================
# 3. OPTION 3: Precision Emerald Jade & Steel Gray Geometry (翡翠碧玉 × 钢灰几何手柄)
# Clean pearl white canvas, elegant emerald green #059669 and slate gray.
# =========================================================================
def gen_clean_3(size=512):
    img = Image.new('RGBA', (size, size), (246, 248, 250, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(255, 255, 255, 255), outline=(209, 213, 219, 255), width=3)

    # Steel Slate Hexagonal Pad Silhouette
    pts = [
        (cx - 130, cy - 65),
        (cx - 60, cy - 85),
        (cx + 60, cy - 85),
        (cx + 130, cy - 65),
        (cx + 140, cy + 55),
        (cx + 80, cy + 85),
        (cx, cy + 50),
        (cx - 80, cy + 85),
        (cx - 140, cy + 55)
    ]
    draw.polygon(pts, fill=(30, 41, 59, 255))

    # Precision Emerald Jade Cutout (#059669)
    draw.polygon([(cx - 50, cy - 70), (cx + 50, cy - 70), (cx, cy + 30)], fill=(5, 150, 105, 255))

    # Left / Right Controls in Clean White & Jade
    lx, ly = cx - 80, cy
    draw.ellipse([lx - 12, ly - 12, lx + 12, ly + 12], fill=(255, 255, 255, 255))
    draw.ellipse([lx - 5, ly - 5, lx + 5, ly + 5], fill=(5, 150, 105, 255))

    rx, ry = cx + 80, cy
    draw.ellipse([rx - 12, ry - 12, rx + 12, ry + 12], fill=(16, 185, 129, 255))

    # Center Pure AI White Star
    draw_spark(draw, cx, cy - 25, 18, (255, 255, 255, 255))
    return img

# =========================================================================
# 4. OPTION 4: Flat Modern Designer Color-Block (现代包豪斯 / 双色色块极简手柄)
# Clean ivory canvas, deep graphite + warm sunset coral (#EA580C) accent.
# =========================================================================
def gen_clean_4(size=512):
    img = Image.new('RGBA', (size, size), (250, 250, 250, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(255, 255, 255, 255), outline=(229, 231, 235, 255), width=3)

    # Clean Dual-tone Gamepad Split: Left Half Navy, Right Half Sunset Coral
    gp_w, gp_h = 280, 160
    gl, gt = cx - gp_w/2, cy - gp_h/2
    
    # Base Navy Chassis
    draw.rounded_rectangle([gl, gt, gl + gp_w, gt + gp_h], radius=48, fill=(17, 24, 39, 255))

    # Right half Coral Accent Cap (#F97316)
    draw.ellipse([cx + 20, cy - 65, cx + 130, cy + 65], fill=(249, 115, 22, 255))

    # Clean Left D-pad (White)
    lx = cx - 75
    draw.rounded_rectangle([lx - 5, cy - 20, lx + 5, cy + 20], radius=3, fill=(255, 255, 255, 255))
    draw.rounded_rectangle([lx - 20, cy - 5, lx + 20, cy + 5], radius=3, fill=(255, 255, 255, 255))

    # Right Action Buttons (White on Coral)
    rx = cx + 75
    draw.ellipse([rx - 9, cy - 9, rx + 9, cy + 9], fill=(255, 255, 255, 255))

    # Center Pure AI Diamond Star
    draw_spark(draw, cx, cy, 32, (255, 255, 255, 255))
    draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=(249, 115, 22, 255))
    return img

# =========================================================================
# 5. OPTION 5: Minimalist Lettermark "AG" & Joystick Pivot (极简英文字标 "A"+"G" 科技徽标)
# Clean light ice-gray canvas, deep indigo (#312E81) & sky blue (#0284C7).
# =========================================================================
def gen_clean_5(size=512):
    img = Image.new('RGBA', (size, size), (243, 244, 246, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(255, 255, 255, 255), outline=(209, 213, 219, 255), width=3)

    # Stylized Capital "A" (Play Triangle) in Deep Indigo
    a_pts = [(cx, cy - 130), (cx + 120, cy + 90), (cx + 70, cy + 90), (cx, cy - 30), (cx - 70, cy + 90), (cx - 120, cy + 90)]
    draw.polygon(a_pts, fill=(30, 27, 75, 255))

    # Blue Joypad Crossbar (#0284C7)
    draw.rounded_rectangle([cx - 70, cy + 20, cx + 70, cy + 45], radius=6, fill=(2, 132, 199, 255))

    # Center Floating Joystick Orb in Pure White & Sky Blue
    draw.ellipse([cx - 28, cy - 35 - 28, cx + 28, cy - 35 + 28], fill=(255, 255, 255, 255), outline=(2, 132, 199, 255), width=5)
    draw_spark(draw, cx, cy - 35, 16, (2, 132, 199, 255))

    return img

ops = [
    ('option_1.png', gen_clean_1),
    ('option_2.png', gen_clean_2),
    ('option_3.png', gen_clean_3),
    ('option_4.png', gen_clean_4),
    ('option_5.png', gen_clean_5)
]

for name, fn in ops:
    img = fn(512)
    img.save(os.path.join('public/logos', name), 'PNG')
    img.save(os.path.join(artifact_dir, name), 'PNG')
    print(f'Rendered Premium Clean Logo: {name}')

print('ALL_CLEAN_LOGOS_RENDERED_SUCCESSFULLY')
