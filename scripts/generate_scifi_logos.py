import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/logos', exist_ok=True)
artifact_dir = r'C:\Users\Mayn\.gemini\antigravity\brain\05acaadb-8d24-4b32-810b-27069f1d28e0'
os.makedirs(artifact_dir, exist_ok=True)

# Helper: Draw glowing line
def draw_glow_line(img, p1, p2, color, width=4, blur=8):
    glow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    d.line([p1, p2], fill=color, width=width + 6)
    glow = glow.filter(ImageFilter.GaussianBlur(blur))
    img = Image.alpha_composite(img, glow)
    d2 = ImageDraw.Draw(img)
    d2.line([p1, p2], fill=(255, 255, 255, 255), width=max(1, width // 2))
    d2.line([p1, p2], fill=color, width=width)
    return img

# Helper: Draw starburst spark
def draw_spark(draw, cx, cy, radius, color=(255, 255, 255, 255)):
    pts = [
        (cx, cy - radius),
        (cx + radius * 0.2, cy - radius * 0.2),
        (cx + radius, cy),
        (cx + radius * 0.2, cy + radius * 0.2),
        (cx, cy + radius),
        (cx - radius * 0.2, cy + radius * 0.2),
        (cx - radius, cy),
        (cx - radius * 0.2, cy - radius * 0.2),
    ]
    draw.polygon(pts, fill=color)

# =========================================================================
# 1. OPTION 1: Cybernetic AI Neural Eye & Holographic Controller
# =========================================================================
def gen_scifi_1(size=512):
    img = Image.new('RGBA', (size, size), (6, 8, 14, 255))
    cx, cy = size // 2, size // 2
    
    # 1. Deep Space Nebula Background
    nebula = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    nd = ImageDraw.Draw(nebula)
    nd.ellipse([cx - 200, cy - 200, cx + 200, cy + 200], fill=(0, 240, 255, 60))
    nd.ellipse([cx - 100, cy - 140, cx + 180, cy + 140], fill=(255, 0, 128, 70))
    nd.ellipse([cx - 80, cy - 80, cx + 80, cy + 80], fill=(138, 43, 226, 90))
    nebula = nebula.filter(ImageFilter.GaussianBlur(50))
    img = Image.alpha_composite(img, nebula)

    # 2. Hexagonal Cyber Shield Field
    hex_glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    hd = ImageDraw.Draw(hex_glow)
    hex_pts = [(cx + 210 * math.cos(math.radians(a)), cy + 210 * math.sin(math.radians(a))) for a in range(30, 390, 60)]
    hd.polygon(hex_pts, outline=(0, 240, 255, 180), width=4)
    hex_glow = hex_glow.filter(ImageFilter.GaussianBlur(12))
    img = Image.alpha_composite(img, hex_glow)
    
    draw = ImageDraw.Draw(img)
    draw.polygon(hex_pts, outline=(0, 240, 255, 230), width=3)
    for p in hex_pts:
        draw.ellipse([p[0] - 6, p[1] - 6, p[0] + 6, p[1] + 6], fill=(0, 240, 255, 255))

    # 3. Futuristic Holographic Controller Wings
    gp_w, gp_h = 290, 150
    gp_left, gp_top = cx - gp_w / 2, cy - gp_h / 2
    
    # Outer chrome chassis
    draw.rounded_rectangle([gp_left, gp_top, gp_left + gp_w, gp_top + gp_h], radius=45, fill=(15, 22, 36, 230), outline=(0, 240, 255, 255), width=5)
    
    # Wing accent stripes (Neon Pink)
    draw.arc([gp_left + 15, gp_top + 15, gp_left + 75, gp_top + 135], start=120, end=240, fill=(255, 0, 128, 255), width=6)
    draw.arc([gp_left + gp_w - 75, gp_top + 15, gp_left + gp_w - 15, gp_top + 135], start=300, end=420, fill=(255, 0, 128, 255), width=6)

    # 4. Central Cybernetic AI Neural Eye
    draw.ellipse([cx - 55, cy - 55, cx + 55, cy + 55], fill=(10, 14, 24, 255), outline=(138, 43, 226, 255), width=5)
    draw.ellipse([cx - 38, cy - 38, cx + 38, cy + 38], fill=(20, 28, 48, 255), outline=(0, 240, 255, 255), width=3)
    
    # Pupil Aperture (Luminous Cyan Star)
    draw.ellipse([cx - 18, cy - 18, cx + 18, cy + 18], fill=(0, 240, 255, 255))
    draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(255, 255, 255, 255))

    # 5. D-Pad & Action Cyber Nodes
    # Left D-Pad
    lx, ly = cx - 88, cy
    draw.rounded_rectangle([lx - 7, ly - 26, lx + 7, ly + 26], radius=3, fill=(0, 240, 255, 255))
    draw.rounded_rectangle([lx - 26, ly - 7, lx + 26, ly + 7], radius=3, fill=(0, 240, 255, 255))

    # Right 4 Neon Diamond Buttons
    rx, ry = cx + 88, cy
    b_dist = 26
    draw.ellipse([rx - 6, ry - b_dist - 6, rx + 6, ry - b_dist + 6], fill=(255, 0, 128, 255))
    draw.ellipse([rx + b_dist - 6, ry - 6, rx + b_dist + 6, ry + 6], fill=(0, 240, 255, 255))
    draw.ellipse([rx - 6, ry + b_dist - 6, rx + 6, ry + b_dist + 6], fill=(255, 0, 128, 255))
    draw.ellipse([rx - b_dist - 6, ry - 6, rx - b_dist + 6, ry + 6], fill=(0, 240, 255, 255))

    # 6. AI Sparks
    draw_spark(draw, cx - 120, cy - 90, 14, (0, 240, 255, 255))
    draw_spark(draw, cx + 120, cy - 90, 14, (255, 0, 128, 255))
    return img

# =========================================================================
# 2. OPTION 2: Interstellar Warp Stargate & Plasma Crystal Controller
# =========================================================================
def gen_scifi_2(size=512):
    img = Image.new('RGBA', (size, size), (5, 9, 15, 255))
    cx, cy = size // 2, size // 2

    # 1. Cosmic Starlight & Radial Plasma Field
    plasma = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    pd = ImageDraw.Draw(plasma)
    pd.ellipse([cx - 210, cy - 210, cx + 210, cy + 210], fill=(0, 255, 178, 60))
    pd.ellipse([cx - 130, cy - 130, cx + 130, cy + 130], fill=(0, 136, 255, 80))
    plasma = plasma.filter(ImageFilter.GaussianBlur(40))
    img = Image.alpha_composite(img, plasma)

    # 2. Rotating Warp Ring with 8 Celestial Nodes
    ring_glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring_glow)
    rd.ellipse([cx - 190, cy - 190, cx + 190, cy + 190], outline=(0, 255, 178, 200), width=8)
    ring_glow = ring_glow.filter(ImageFilter.GaussianBlur(14))
    img = Image.alpha_composite(img, ring_glow)

    draw = ImageDraw.Draw(img)
    draw.ellipse([cx - 190, cy - 190, cx + 190, cy + 190], outline=(0, 255, 178, 255), width=4)
    draw.ellipse([cx - 175, cy - 175, cx + 175, cy + 175], outline=(0, 136, 255, 160), width=2)
    
    # 8 Stargate Chevrons
    for a in range(0, 360, 45):
        rad = math.radians(a)
        nx, ny = cx + 190 * math.cos(rad), cy + 190 * math.sin(rad)
        draw.ellipse([nx - 8, ny - 8, nx + 8, ny + 8], fill=(0, 255, 178, 255), outline=(255, 255, 255, 255), width=2)

    # 3. Floating Faceted Crystal Controller
    c_pts = [
        (cx - 130, cy - 60),
        (cx - 70, cy - 85),
        (cx + 70, cy - 85),
        (cx + 130, cy - 60),
        (cx + 150, cy + 50),
        (cx + 90, cy + 90),
        (cx + 40, cy + 50),
        (cx - 40, cy + 50),
        (cx - 90, cy + 90),
        (cx - 150, cy + 50)
    ]
    draw.polygon(c_pts, fill=(12, 28, 44, 230), outline=(0, 255, 178, 255), width=5)

    # Facet Internal Lines
    draw.line([(cx - 70, cy - 85), (cx - 40, cy + 50)], fill=(0, 136, 255, 180), width=3)
    draw.line([(cx + 70, cy - 85), (cx + 40, cy + 50)], fill=(0, 136, 255, 180), width=3)
    draw.line([(cx - 130, cy - 60), (cx + 130, cy - 60)], fill=(0, 255, 178, 120), width=2)

    # Glowing AI Reactor Core (Prism Triangle)
    tri_top = (cx, cy - 40)
    tri_r = (cx + 35, cy + 25)
    tri_l = (cx - 35, cy + 25)
    draw.polygon([tri_top, tri_r, tri_l], fill=(0, 255, 178, 255))
    draw.polygon([(cx, cy + 10), (cx + 16, cy - 15), (cx - 16, cy - 15)], fill=(255, 255, 255, 255))

    # Controls
    draw.ellipse([cx - 85 - 12, cy - 10 - 12, cx - 85 + 12, cy - 10 + 12], fill=(0, 136, 255, 255))
    draw.ellipse([cx + 85 - 12, cy - 10 - 12, cx + 85 + 12, cy - 10 + 12], fill=(0, 255, 178, 255))
    return img

# =========================================================================
# 3. OPTION 3: Cosmic Nebula Singularity & Quantum AI Diamond
# =========================================================================
def gen_scifi_3(size=512):
    img = Image.new('RGBA', (size, size), (8, 6, 16, 255))
    cx, cy = size // 2, size // 2

    # 1. Radiant Magenta / Violet / Cyan Nebula
    nebula = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    nd = ImageDraw.Draw(nebula)
    nd.ellipse([cx - 200, cy - 150, cx + 200, cy + 150], fill=(255, 0, 170, 70))
    nd.ellipse([cx - 140, cy - 180, cx + 140, cy + 180], fill=(0, 245, 255, 80))
    nd.ellipse([cx - 70, cy - 70, cx + 70, cy + 70], fill=(255, 255, 255, 100))
    nebula = nebula.filter(ImageFilter.GaussianBlur(45))
    img = Image.alpha_composite(img, nebula)

    # 2. Hyper-Diamond Quantum Core (Octahedral Structure)
    d_top = (cx, cy - 170)
    d_right = (cx + 140, cy)
    d_bottom = (cx, cy + 170)
    d_left = (cx - 140, cy)
    
    # Outer Glow
    dg = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    dgd = ImageDraw.Draw(dg)
    dgd.polygon([d_top, d_right, d_bottom, d_left], outline=(0, 245, 255, 220), width=8)
    dg = dg.filter(ImageFilter.GaussianBlur(16))
    img = Image.alpha_composite(img, dg)

    draw = ImageDraw.Draw(img)
    
    # Diamond Faces
    draw.polygon([d_top, d_right, (cx, cy), d_left], fill=(20, 15, 40, 220), outline=(255, 0, 170, 255), width=4)
    draw.polygon([d_left, (cx, cy), d_right, d_bottom], fill=(12, 24, 45, 220), outline=(0, 245, 255, 255), width=4)
    
    # Cross laser axis
    draw.line([(cx, cy - 170), (cx, cy + 170)], fill=(255, 255, 255, 220), width=3)
    draw.line([(cx - 140, cy), (cx + 140, cy)], fill=(255, 255, 255, 220), width=3)

    # 3. Game Controller Circuit Integration
    # D-pad cross on left upper face
    draw.rectangle([cx - 75, cy - 50, cx - 60, cy - 20], fill=(0, 245, 255, 255))
    draw.rectangle([cx - 90, cy - 40, cx - 45, cy - 30], fill=(0, 245, 255, 255))
    
    # 3 Action Nodes on right upper face
    draw.ellipse([cx + 60 - 7, cy - 45 - 7, cx + 60 + 7, cy - 45 + 7], fill=(255, 0, 170, 255))
    draw.ellipse([cx + 78 - 7, cy - 30 - 7, cx + 78 + 7, cy - 30 + 7], fill=(0, 245, 255, 255))
    draw.ellipse([cx + 50 - 7, cy - 20 - 7, cx + 50 + 7, cy - 20 + 7], fill=(255, 255, 0, 255))

    # 4. Supernova Singularity Spark
    draw_spark(draw, cx, cy, 45, (255, 255, 255, 255))
    draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(0, 245, 255, 255))
    return img

# =========================================================================
# 4. OPTION 4: Sci-Fi Mecha HUD & Zero-Point Energy Core
# =========================================================================
def gen_scifi_4(size=512):
    img = Image.new('RGBA', (size, size), (4, 10, 8, 255))
    cx, cy = size // 2, size // 2

    # 1. Neon Green & Orange Energy Aura
    aura = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    ad = ImageDraw.Draw(aura)
    ad.ellipse([cx - 190, cy - 190, cx + 190, cy + 190], fill=(0, 255, 102, 60))
    ad.ellipse([cx - 100, cy - 100, cx + 100, cy + 100], fill=(255, 107, 0, 70))
    aura = aura.filter(ImageFilter.GaussianBlur(38))
    img = Image.alpha_composite(img, aura)

    # 2. Tactical HUD Crosshair Circles
    draw = ImageDraw.Draw(img)
    # Segmented outer circle
    draw.arc([cx - 190, cy - 190, cx + 190, cy + 190], start=15, end=75, fill=(0, 255, 102, 255), width=5)
    draw.arc([cx - 190, cy - 190, cx + 190, cy + 190], start=105, end=165, fill=(0, 255, 102, 255), width=5)
    draw.arc([cx - 190, cy - 190, cx + 190, cy + 190], start=195, end=255, fill=(0, 255, 102, 255), width=5)
    draw.arc([cx - 190, cy - 190, cx + 190, cy + 190], start=285, end=345, fill=(0, 255, 102, 255), width=5)

    # Inner Radar Ring
    draw.ellipse([cx - 150, cy - 150, cx + 150, cy + 150], outline=(0, 255, 102, 120), width=2)
    
    # HUD Target Reticles
    draw.line([(cx - 200, cy), (cx - 160, cy)], fill=(255, 107, 0, 255), width=4)
    draw.line([(cx + 160, cy), (cx + 200, cy)], fill=(255, 107, 0, 255), width=4)
    draw.line([(cx, cy - 200), (cx, cy - 160)], fill=(255, 107, 0, 255), width=4)
    draw.line([(cx, cy + 160), (cx, cy + 200)], fill=(255, 107, 0, 255), width=4)

    # 3. Futuristic Mecha Controller Chassis
    m_pts = [
        (cx - 110, cy - 50),
        (cx - 50, cy - 75),
        (cx + 50, cy - 75),
        (cx + 110, cy - 50),
        (cx + 125, cy + 45),
        (cx + 75, cy + 85),
        (cx, cy + 45),
        (cx - 75, cy + 85),
        (cx - 125, cy + 45)
    ]
    draw.polygon(m_pts, fill=(10, 24, 18, 240), outline=(0, 255, 102, 255), width=5)

    # Reactor Core in Center
    draw.ellipse([cx - 30, cy - 15 - 30, cx + 30, cy - 15 + 30], fill=(255, 107, 0, 255))
    draw.ellipse([cx - 16, cy - 15 - 16, cx + 16, cy - 15 + 16], fill=(255, 255, 255, 255))
    
    # Directional D-pad & Laser Nodes
    draw.rounded_rectangle([cx - 80 - 5, cy - 5 - 18, cx - 80 + 5, cy - 5 + 18], radius=2, fill=(0, 255, 102, 255))
    draw.rounded_rectangle([cx - 80 - 18, cy - 5 - 5, cx - 80 + 18, cy - 5 + 5], radius=2, fill=(0, 255, 102, 255))
    
    draw.ellipse([cx + 80 - 8, cy - 5 - 8, cx + 80 + 8, cy - 5 + 8], fill=(0, 255, 102, 255))
    draw.ellipse([cx + 65 - 6, cy + 18 - 6, cx + 65 + 6, cy + 18 + 6], fill=(255, 107, 0, 255))
    return img

# =========================================================================
# 5. OPTION 5: Cyberpunk Synthwave Warp Matrix & Holographic Gamepad
# =========================================================================
def gen_scifi_5(size=512):
    img = Image.new('RGBA', (size, size), (10, 5, 20, 255))
    cx, cy = size // 2, size // 2

    # 1. Sunset Horizon & Neon Laser Grid
    grid = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    
    # Retro Synthwave Sun Glow
    gd.ellipse([cx - 170, cy - 200, cx + 170, cy + 140], fill=(255, 0, 128, 80))
    gd.ellipse([cx - 110, cy - 160, cx + 110, cy + 60], fill=(255, 230, 0, 90))
    grid = grid.filter(ImageFilter.GaussianBlur(35))
    img = Image.alpha_composite(img, grid)

    draw = ImageDraw.Draw(img)
    
    # Lower Perspective Grid Lines (Cyan)
    for y in range(cy + 40, size - 20, 25):
        draw.line([(30, y), (size - 30, y)], fill=(0, 229, 255, 110), width=2)
    for x in range(50, size, 55):
        draw.line([(cx + (x - cx) * 0.3, cy + 40), (x, size - 20)], fill=(0, 229, 255, 110), width=2)

    # 2. Radiant Holographic Gamepad Frame (Neon Pink + Gold + Cyan)
    gp_w, gp_h = 300, 155
    gp_l, gp_t = cx - gp_w / 2, cy - 25 - gp_h / 2
    
    # Outer Glow Frame
    g_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    g_d = ImageDraw.Draw(g_img)
    g_d.rounded_rectangle([gp_l, gp_t, gp_l + gp_w, gp_t + gp_h], radius=48, fill=(18, 10, 36, 230), outline=(255, 0, 128, 230), width=8)
    g_img = g_img.filter(ImageFilter.GaussianBlur(14))
    img = Image.alpha_composite(img, g_img)

    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle([gp_l, gp_t, gp_l + gp_w, gp_t + gp_h], radius=48, fill=(18, 10, 36, 230), outline=(255, 0, 128, 255), width=5)
    
    # Inner Cyber Cyan Track
    draw.rounded_rectangle([gp_l + 10, gp_t + 10, gp_l + gp_w - 10, gp_t + gp_h - 10], radius=40, outline=(0, 229, 255, 200), width=3)

    # Central Golden AI Prompt Core
    core_y = cy - 25
    draw.ellipse([cx - 40, core_y - 40, cx + 40, core_y + 40], fill=(255, 230, 0, 255))
    draw_spark(draw, cx, core_y, 35, (255, 255, 255, 255))

    # Neon Controls
    # Left D-pad
    lx = cx - 90
    draw.rounded_rectangle([lx - 7, core_y - 25, lx + 7, core_y + 25], radius=3, fill=(0, 229, 255, 255))
    draw.rounded_rectangle([lx - 25, core_y - 7, lx + 25, core_y + 7], radius=3, fill=(0, 229, 255, 255))

    # Right 4 Action Diamonds
    rx = cx + 90
    draw.ellipse([rx - 8, core_y - 26 - 8, rx + 8, core_y - 26 + 8], fill=(255, 0, 128, 255))
    draw.ellipse([rx + 26 - 8, core_y - 8, rx + 26 + 8, core_y + 8], fill=(255, 230, 0, 255))
    draw.ellipse([rx - 8, core_y + 26 - 8, rx + 8, core_y + 26 + 8], fill=(0, 229, 255, 255))
    draw.ellipse([rx - 26 - 8, core_y - 8, rx - 26 + 8, core_y + 8], fill=(255, 0, 128, 255))

    return img

ops = [
    ('option_1.png', gen_scifi_1),
    ('option_2.png', gen_scifi_2),
    ('option_3.png', gen_scifi_3),
    ('option_4.png', gen_scifi_4),
    ('option_5.png', gen_scifi_5)
]

for name, fn in ops:
    img = fn(512)
    img.save(os.path.join('public/logos', name), 'PNG')
    img.save(os.path.join(artifact_dir, name), 'PNG')
    print(f'Successfully rendered Sci-Fi Logo: {name}')

print('ALL_SCIFI_LOGOS_GENERATED_SUCCESSFULLY')
