$files = Get-ChildItem ".\*.html" -Exclude "area_docenti.html"
foreach ($file in $files) {
    if ($file.Name -match "area_docenti") { continue }
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $pattern = '<div style="display:flex; align-items:center;">\$ <button'
    $brandHtml = '<a href="index.html" class="nav-brand">Portale Didattico <span style="color: #fff; font-size: 0.8rem; display:block;">Prof. Belardi Nicolino</span></a>'
    $replacement = '<div style="display:flex; align-items:center;">' + $brandHtml + ' <button'
    
    if ($content -match '\$ <button') {
        $newContent = $content.Replace('<div style="display:flex; align-items:center;">$ <button', $replacement)
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Riparato $($file.Name)"
    }
}
