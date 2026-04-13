$ErrorActionPreference = "Stop"

$templatePath = "matrici_informatica.html"
$wordHtmlPath = "temp_matrici\matrici.htm"
$outputPath = "matrici_informatica.html"

Write-Host "Leggo template..."
$template = [System.IO.File]::ReadAllText($templatePath, [System.Text.Encoding]::UTF8)

Write-Host "Leggo html di word in modalita sicura..."
$fileStream = New-Object IO.FileStream($wordHtmlPath, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::ReadWrite)
$reader = New-Object IO.StreamReader($fileStream, [System.Text.Encoding]::UTF8)
$wordHtml = $reader.ReadToEnd()
$reader.Close()
$fileStream.Close()

Write-Host "Estraggo body..."
$bodyContent = ""
if ($wordHtml -match '(?si)<body[^>]*>(.*?)</body>') {
    $bodyContent = $matches[1]
    Write-Host "Body estratto. Modifico link immagini..."
    $bodyContent = $bodyContent -replace '(src=")(matrici_file/[^"]+")', '$1temp_matrici/$2'
} else {
    Write-Host "Nessun body trovato, forse non e un file HTML esportato da Word."
    $bodyContent = "<p>Nessun body trovato in matrici.htm</p>"
}

$startMarker = "<!-- START-WORD-CONTENT -->"
$endMarker = "<!-- END-WORD-CONTENT -->"

$escStart = [regex]::Escape($startMarker)
$escEnd = [regex]::Escape($endMarker)

Write-Host "Sostituisco nel template..."
$pattern = "(?si)($escStart).*?($escEnd)"
$replacement = "`$1`n<div id=`"injected-content`" style=`"display:none;`">`n$bodyContent`n</div>`n`$2"

if ($template -match $pattern) {
    # Per evitare eccezioni su percorsi file occupati, tentiamo il salvataggio o catturiamo errore.
    try {
        $newTemplate = $template -replace $pattern, $replacement
        [System.IO.File]::WriteAllText($outputPath, $newTemplate, [System.Text.Encoding]::UTF8)
        Write-Host "Fatto! Contenuto inserito correttamente."
    } catch {
        Write-Host "Errore nel salvataggio, forse il file matrici_informatica.html e occupato: $_"
    }
} else {
    Write-Host "Marker non trovati nel template."
}
