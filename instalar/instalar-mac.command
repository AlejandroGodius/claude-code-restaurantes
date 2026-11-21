#!/bin/bash
# Instala VS Code y la extensión de Claude Code, y abre esta carpeta. Para macOS.
# Uso: doble clic (si macOS lo bloquea: clic derecho › Abrir), o en Terminal: bash instalar-mac.command
cd "$(dirname "$0")/.." || exit 1
CARPETA="$(pwd)"
CODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"

echo "1/3 · Visual Studio Code"
if [ ! -x "$CODE" ]; then
  if command -v brew >/dev/null 2>&1; then
    brew install --cask visual-studio-code
  else
    echo "No tienes Homebrew. Descarga VS Code de https://code.visualstudio.com/ , arrástralo a Aplicaciones y vuelve a abrir este instalador."
    open "https://code.visualstudio.com/"
    read -r -p "Pulsa Intro para cerrar"; exit 1
  fi
else
  echo "   Ya está instalado."
fi

echo "2/3 · Extensión de Claude Code"
"$CODE" --install-extension anthropic.claude-code --force

echo "3/3 · Abriendo la carpeta en VS Code"
"$CODE" "$CARPETA"

echo ""
echo "Listo. En VS Code abre el panel de Claude Code (el icono de Claude), entra con tu cuenta de Claude y pega la frase 1 de FRASES.md."
read -r -p "Pulsa Intro para cerrar"
