$files = Get-ChildItem ".\*.html" -Exclude "area_docenti.html"
$oldOnClick = "let u=prompt('Nome Utente:');if(!u)return;let p=prompt('Password:');if(u==='docente'&&p==='Volta2026'){sessionStorage.setItem('auth','1');window.location.href='area_docenti.html';}else{alert('Accesso Negato');}"

foreach ($file in $files) {
    if ($file.Name -match "area_docenti") { continue }
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    if ($content.Contains($oldOnClick)) {
        $newContent = $content.Replace($oldOnClick, "window.location.href='login.html'")
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Aggiornato $($file.Name)"
    }
}
