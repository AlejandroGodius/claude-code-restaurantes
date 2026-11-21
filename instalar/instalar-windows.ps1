# Instala VS Code y la extensión de Claude Code, y abre esta carpeta. Para Windows 10 y 11.
# Uso: doble clic en instalar-windows.bat (o, en PowerShell: powershell -ExecutionPolicy Bypass -File instalar-windows.ps1)
$ErrorActionPreference = "Stop"
$carpeta = Split-Path -Parent $PSScriptRoot

function Buscar-Code {
  $rutas = @("$env:LOCALAPPDATA\Programs\Microsoft VS Code\bin\code.cmd", "$env:ProgramFiles\Microsoft VS Code\bin\code.cmd")
  foreach ($r in $rutas) { if (Test-Path $r) { return $r } }
  $c = Get-Command code -ErrorAction SilentlyContinue
  if ($c) { return $c.Source }
  return $null
}

Write-Host "1/3 · Visual Studio Code" -ForegroundColor Cyan
$code = Buscar-Code
if (-not $code) {
  if (Get-Command winget -ErrorAction SilentlyContinue) {
    winget install -e --id Microsoft.VisualStudioCode --accept-source-agreements --accept-package-agreements
    $code = Buscar-Code
  }
  if (-not $code) {
    Write-Host "No he podido instalarlo solo. Descárgalo de https://code.visualstudio.com/ , instálalo y vuelve a abrir este instalador." -ForegroundColor Yellow
    Start-Process "https://code.visualstudio.com/"
    Read-Host "Pulsa Intro para cerrar"; exit 1
  }
} else { Write-Host "   Ya está instalado." }

Write-Host "2/3 · Extensión de Claude Code" -ForegroundColor Cyan
& $code --install-extension anthropic.claude-code --force

Write-Host "3/3 · Abriendo la carpeta en VS Code" -ForegroundColor Cyan
& $code $carpeta

Write-Host ""
Write-Host "Listo. En VS Code abre el panel de Claude Code (el icono de Claude), entra con tu cuenta de Claude y pega la frase 1 de FRASES.md." -ForegroundColor Green
Read-Host "Pulsa Intro para cerrar"
