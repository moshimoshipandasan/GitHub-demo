# run-serena.ps1
$proj = (Get-Location).Path
uvx --from git+https://github.com/oraios/serena `
  serena start-mcp-server `
  --context ide-assistant `
  --project "$proj"