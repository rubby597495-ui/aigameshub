import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/logos', exist_ok=True)
artifact_dir = r'C:\Users\Mayn\.gemini\antigravity\brain\05acaadb-8d24-4b32-810b-27069f1d28e0'
os.makedirs(artifact_dir, exist_ok=True)

# -------------------------------------------------------------
# 1. OPTION 1: Cyber Minimalist Gamepad & Neural Pulse
# -------------------------------------------------------------
def gen_option_1(size=512):
    img = Image.new('RGBA', (size, size), (14, 18, 20, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Outer rounded squircle
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(16, 22, 25, 255), outline=(52, 211, 153, 100), width=3)
    
    # Ambient glow
    glow = Image.new('RGBA', (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-140, cy-140, cx+140, cy+140], fill=(16, 185, 129, 70))
    gd.ellipse([cx-80, cy-80, cx+80, cy+80], fill=(6, 182, 212, 90))
    glow = glow.filter(ImageFilter.GaussianBlur(35))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Sleek controller silhouette
    draw.rounded_rectangle([cx - 160, cy - 80, cx + 160, cy + 90], radius=50, fill=(24, 34, 38, 255), outline=(52, 211, 153, 240), width=6)
    
    # Left D-Pad
    lx, ly = cx - 85, cy + 5
    draw.rounded_rectangle([lx - 8, ly - 32, lx + 8, ly + 32], radius=4, fill=(52, 211, 153, 255))
    draw.rounded_rectangle([lx - 32, ly - 8, lx + 32, ly + 8], radius=4, fill=(52, 211, 153, 255))
    draw.ellipse([lx - 3, ly - 3, lx + 3, ly + 3], fill=(16, 22, 25, 255))

    # Right Action Buttons
    rx, ry = cx + 85, cy + 5
    draw.ellipse([rx - 8, ry - 30 - 8, rx + 8, ry - 30 + 8], fill=(56, 189, 248, 255))
    draw.ellipse([rx + 30 - 8, ry - 8, rx + 30 + 8, ry + 8], fill=(52, 211, 153, 255))
    draw.ellipse([rx - 8, ry + 30 - 8, rx + 8, ry + 30 + 8], fill=(56, 189, 248, 255))
    draw.ellipse([rx - 30 - 8, ry - 8, rx - 30 + 8, ry + 8], fill=(52, 211, 153, 255))

    # Center Glowing AI Diamond
    spark_len = 36
    pts = [(cx, cy - spark_len), (cx + spark_len*0.3, cy - spark_len*0.3), (cx + spark_len, cy), (cx + spark_len*0.3, cy + spark_len*0.3), (cx, cy + spark_len), (cx - spark_len*0.3, cy + spark_len*0.3), (cx - spark_len, cy), (cx - spark_len*0.3, cy - spark_len*0.3)]
    draw.polygon(pts, fill=(167, 243, 208, 255))
    draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(255, 255, 255, 255))
    return img

# -------------------------------------------------------------
# 2. OPTION 2: Dimensional Hypercube / Portal
# -------------------------------------------------------------
def gen_option_2(size=512):
    img = Image.new('RGBA', (size, size), (12, 14, 18, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(15, 18, 24, 255), outline=(99, 102, 241, 120), width=3)
    
    # Purple/Cyan Neon Glow
    glow = Image.new('RGBA', (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-130, cy-130, cx+130, cy+130], fill=(99, 102, 241, 90))
    gd.ellipse([cx-70, cy-70, cx+70, cy+70], fill=(52, 211, 153, 100))
    glow = glow.filter(ImageFilter.GaussianBlur(38))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Isometric Hexagon Portal Outer
    hex_r = 130
    pts_outer = [(cx + hex_r * math.cos(math.radians(a)), cy + hex_r * math.sin(math.radians(a))) for a in range(30, 390, 60)]
    draw.polygon(pts_outer, outline=(56, 189, 248, 255), width=6)
    
    # Inner Isometric Cube Faces
    draw.polygon([(cx, cy), pts_outer[5], pts_outer[0], (cx, cy - hex_r)], fill=(30, 41, 59, 220), outline=(52, 211, 153, 200), width=3)
    draw.polygon([(cx, cy), pts_outer[0], pts_outer[1], pts_outer[2]], fill=(20, 28, 42, 220), outline=(99, 102, 241, 200), width=3)
    draw.polygon([(cx, cy), pts_outer[2], pts_outer[3], pts_outer[4]], fill=(15, 23, 36, 220), outline=(56, 189, 248, 200), width=3)
    draw.polygon([(cx, cy), pts_outer[4], pts_outer[5], (cx, cy - hex_r)], fill=(24, 34, 50, 220), outline=(52, 211, 153, 200), width=3)

    # Center floating Play Button / Core
    core_pts = [(cx - 20, cy - 35), (cx + 35, cy), (cx - 20, cy + 35)]
    draw.polygon(core_pts, fill=(52, 211, 153, 255))
    draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=(255, 255, 255, 255))
    return img

# -------------------------------------------------------------
# 3. OPTION 3: Architectural AI Monogram
# -------------------------------------------------------------
def gen_option_3(size=512):
    img = Image.new('RGBA', (size, size), (13, 16, 18, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(18, 22, 26, 255), outline=(52, 211, 153, 140), width=3)

    # Ambient emerald glow
    glow = Image.new('RGBA', (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-120, cy-120, cx+120, cy+120], fill=(16, 185, 129, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(30))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Stylized Capital "A" fused with Gamepad Delta
    t_top = (cx - 40, cy - 120)
    t_left = (cx - 150, cy + 110)
    t_right = (cx + 70, cy + 110)
    draw.polygon([t_top, t_right, (t_right[0]-36, t_right[1]), (cx - 40, cy - 60), (t_left[0]+36, t_left[1]), t_left], fill=(52, 211, 153, 255))
    
    # Crossbar
    draw.rounded_rectangle([cx - 105, cy + 20, cx + 25, cy + 50], radius=6, fill=(52, 211, 153, 255))

    # Neural Dot "I" on right
    ix = cx + 120
    draw.ellipse([ix - 18, cy - 120, ix + 18, cy - 84], fill=(56, 189, 248, 255))
    draw.rounded_rectangle([ix - 18, cy - 60, ix + 18, cy + 110], radius=16, fill=(56, 189, 248, 255))
    
    # Connecting micro-circuits
    draw.line([(cx + 25, cy + 35), (ix - 18, cy + 35)], fill=(167, 243, 208, 220), width=6)
    draw.ellipse([cx + 25 - 6, cy + 35 - 6, cx + 25 + 6, cy + 35 + 6], fill=(255, 255, 255, 255))
    return img

# -------------------------------------------------------------
# 4. OPTION 4: Quantum Orbit & Core Spark
# -------------------------------------------------------------
def gen_option_4(size=512):
    img = Image.new('RGBA', (size, size), (10, 12, 16, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(14, 18, 24, 255), outline=(56, 189, 248, 120), width=3)

    # Cyan/Emerald Soft Glow
    glow = Image.new('RGBA', (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-140, cy-140, cx+140, cy+140], fill=(6, 182, 212, 80))
    gd.ellipse([cx-60, cy-60, cx+60, cy+60], fill=(52, 211, 153, 110))
    glow = glow.filter(ImageFilter.GaussianBlur(35))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Tilted Orbit 1 (Emerald)
    orbit1 = Image.new('RGBA', (size, size), (0,0,0,0))
    od1 = ImageDraw.Draw(orbit1)
    od1.ellipse([cx - 160, cy - 70, cx + 160, cy + 70], outline=(52, 211, 153, 230), width=7)
    orbit1 = orbit1.rotate(35, center=(cx, cy), resample=Image.Resampling.BICUBIC)
    img = Image.alpha_composite(img, orbit1)

    # Tilted Orbit 2 (Cyan)
    orbit2 = Image.new('RGBA', (size, size), (0,0,0,0))
    od2 = ImageDraw.Draw(orbit2)
    od2.ellipse([cx - 160, cy - 70, cx + 160, cy + 70], outline=(56, 189, 248, 230), width=7)
    orbit2 = orbit2.rotate(-35, center=(cx, cy), resample=Image.Resampling.BICUBIC)
    img = Image.alpha_composite(img, orbit2)
    draw = ImageDraw.Draw(img)

    # Center Quantum AI Core
    draw.ellipse([cx - 50, cy - 50, cx + 50, cy + 50], fill=(16, 26, 32, 255), outline=(167, 243, 208, 255), width=5)
    
    # 4 Glowing Nodes on Core
    draw.ellipse([cx - 8, cy - 50 - 8, cx + 8, cy - 50 + 8], fill=(52, 211, 153, 255))
    draw.ellipse([cx + 50 - 8, cy - 8, cx + 50 + 8, cy + 8], fill=(56, 189, 248, 255))
    draw.ellipse([cx - 8, cy + 50 - 8, cx + 8, cy + 50 + 8], fill=(52, 211, 153, 255))
    draw.ellipse([cx - 50 - 8, cy - 8, cx - 50 + 8, cy + 8], fill=(56, 189, 248, 255))
    
    # Center Supernova Star
    spark = 24
    pts = [(cx, cy-spark), (cx+spark*0.25, cy-spark*0.25), (cx+spark, cy), (cx+spark*0.25, cy+spark*0.25), (cx, cy+spark), (cx-spark*0.25, cy+spark*0.25), (cx-spark, cy), (cx-spark*0.25, cy-spark*0.25)]
    draw.polygon(pts, fill=(255, 255, 255, 255))
    return img

# -------------------------------------------------------------
# 5. OPTION 5: Cyberpunk Mecha Shield
# -------------------------------------------------------------
def gen_option_5(size=512):
    img = Image.new('RGBA', (size, size), (12, 15, 17, 255))
    draw = ImageDraw.Draw(img)
    cx, cy = size // 2, size // 2

    # Squircle frame
    margin = int(size * 0.05)
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=int(size*0.22), fill=(16, 20, 24, 255), outline=(245, 158, 11, 100), width=3)

    # Amber & Emerald Glow
    glow = Image.new('RGBA', (size, size), (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([cx-130, cy-130, cx+130, cy+130], fill=(16, 185, 129, 70))
    gd.ellipse([cx-70, cy-70, cx+70, cy+70], fill=(245, 158, 11, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(35))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Angular Mecha Shield Contour
    shield_pts = [
        (cx, cy - 130),
        (cx + 120, cy - 80),
        (cx + 95, cy + 60),
        (cx, cy + 140),
        (cx - 95, cy + 60),
        (cx - 120, cy - 80)
    ]
    draw.polygon(shield_pts, fill=(22, 28, 34, 255), outline=(52, 211, 153, 240), width=6)

    # Inner Shield Inset
    inner_pts = [
        (cx, cy - 100),
        (cx + 90, cy - 60),
        (cx + 70, cy + 45),
        (cx, cy + 110),
        (cx - 70, cy + 45),
        (cx - 90, cy - 60)
    ]
    draw.polygon(inner_pts, outline=(245, 158, 11, 200), width=3)

    # Center Cyberpunk AI Core Symbol (Tri-Force / Neural Delta)
    d_top = (cx, cy - 45)
    d_right = (cx + 45, cy + 35)
    d_left = (cx - 45, cy + 35)
    draw.polygon([d_top, d_right, d_left], fill=(52, 211, 153, 255))
    draw.polygon([(cx, cy + 15), (cx + 22, cy - 20), (cx - 22, cy - 20)], fill=(16, 20, 24, 255))
    
    draw.ellipse([cx - 7, cy - 7, cx + 7, cy + 7], fill=(255, 255, 255, 255))
    return img

ops = [
    ('option_1.png', gen_option_1),
    ('option_2.png', gen_option_2),
    ('option_3.png', gen_option_3),
    ('option_4.png', gen_option_4),
    ('option_5.png', gen_option_5)
]

for name, fn in ops:
    img = fn(512)
    img.save(os.path.join('public/logos', name), 'PNG')
    img.save(os.path.join(artifact_dir, name), 'PNG')
    print(f'Successfully generated {name}')

print('ALL_5_LOGOS_GENERATED_SUCCESSFULLY')
