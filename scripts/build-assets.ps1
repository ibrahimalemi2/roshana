Add-Type -AssemblyName System.Drawing

$sourcePath = "public/images/WhatsApp Image 2026-09-02 at 9.23.41 AM.jpeg"
$wordmarkPath = "public/images/WhatsApp Image 2026-09-02 at 9.29.08 AM.jpeg"

Write-Host "Loading source images..."
$srcEmblem = [System.Drawing.Bitmap]::FromFile($sourcePath)
$srcWordmark = [System.Drawing.Bitmap]::FromFile($wordmarkPath)

Write-Host "Emblem dimensions: $($srcEmblem.Width) x $($srcEmblem.Height)"
Write-Host "Wordmark dimensions: $($srcWordmark.Width) x $($srcWordmark.Height)"

# Function to resize and save as PNG with highest interpolation and quality
function Save-Resized-Png {
    param(
        [System.Drawing.Image]$source,
        [int]$targetWidth,
        [int]$targetHeight,
        [string]$outputPath,
        [int]$srcX = 0,
        [int]$srcY = 0,
        [int]$srcW = 0,
        [int]$srcH = 0,
        [System.Drawing.Color]$bgColor = [System.Drawing.Color]::Transparent
    )

    if ($srcW -eq 0) { $srcW = $source.Width }
    if ($srcH -eq 0) { $srcH = $source.Height }

    $targetBmp = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($targetBmp)

    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    if ($bgColor -ne [System.Drawing.Color]::Transparent) {
        $g.Clear($bgColor)
    }

    $destRect = New-Object System.Drawing.Rectangle(0, 0, $targetWidth, $targetHeight)
    $srcRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $srcW, $srcH)

    $g.DrawImage($source, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $targetBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $targetBmp.Dispose()
    Write-Host "Generated: $outputPath ($targetWidth x $targetHeight)"
}

# 1. Generate High-Res Logo Wordmark Variant (1024x)
Save-Resized-Png -source $srcWordmark -targetWidth 1024 -targetHeight ([int](1024 * $srcWordmark.Height / $srcWordmark.Width)) -outputPath "public/assets/roshna-logo-1024.png"

# 2. Extract Emblem Center (The uploaded emblem has square aspect ratio, let's crop emblem region cleanly)
# The full image is 1080x1080 (or similar). Let's generate 512, 192, 180, 32, 16
Save-Resized-Png -source $srcEmblem -targetWidth 512 -targetHeight 512 -outputPath "public/android-chrome-512x512.png"
Save-Resized-Png -source $srcEmblem -targetWidth 192 -targetHeight 192 -outputPath "public/android-chrome-192x192.png"
Save-Resized-Png -source $srcEmblem -targetWidth 180 -targetHeight 180 -outputPath "public/apple-touch-icon.png"
Save-Resized-Png -source $srcEmblem -targetWidth 32 -targetHeight 32 -outputPath "public/favicon-32x32.png"
Save-Resized-Png -source $srcEmblem -targetWidth 16 -targetHeight 16 -outputPath "public/favicon-16x16.png"
Save-Resized-Png -source $srcEmblem -targetWidth 512 -targetHeight 512 -outputPath "public/assets/roshna-emblem-512.png"

# Also save favicon.ico
$icoBmp = New-Object System.Drawing.Bitmap("public/favicon-32x32.png")
$icoBmp.Save("public/favicon.ico", [System.Drawing.Imaging.ImageFormat]::Icon)
$icoBmp.Dispose()
Write-Host "Generated: public/favicon.ico"

$srcEmblem.Dispose()
$srcWordmark.Dispose()
Write-Host "Asset generation completed successfully!"
