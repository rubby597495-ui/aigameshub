import sys
import shutil
import os
from PIL import Image

def apply_logo(option_num=1):
    src_file = f'public/logos/option_{option_num}.png'
    if not os.path.exists(src_file):
        print(f'Error: {src_file} does not exist!')
        return

    # 1. Copy to public/logo.png
    shutil.copy(src_file, 'public/logo.png')
    shutil.copy(src_file, 'public/apple-touch-icon.png')
    
    # 2. Generate multi-resolution favicon.ico
    img = Image.open(src_file)
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    icons = [img.resize(s, Image.Resampling.LANCZOS) for s in icon_sizes]
    icons[0].save('public/favicon.ico', format='ICO', sizes=icon_sizes, append_images=icons[1:])
    
    print(f'Successfully applied Sci-Fi Logo Option {option_num} across AiGamesHub!')

if __name__ == '__main__':
    opt = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    apply_logo(opt)
