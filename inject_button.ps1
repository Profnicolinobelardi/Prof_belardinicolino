$buttonHtml = @"
 <button onclick="let u=prompt('Nome Utente:');if(!u)return;let p=prompt('Password:');if(u==='docente'&&p==='Volta2026'){sessionStorage.setItem('auth','1');window.location.href='area_docenti.html';}else{alert('Accesso Negato');}" style="margin-left:15px; background:rgba(239,68,68,0.2); border:1px solid #ef4444; color:#fff; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.85rem; font-weight:600; display:inline-flex; align-items:center; transition:all 0.3s;" onmouseover="this.style.background='#ef4444'" onmouseout="this.style.background='rgba(239,68,68,0.2)'">&#128273; Area Docenti</button>
"@

$files = Get-ChildItem ".\*.html"
foreach ($file in $files) {
    if ($file.Name -match "area_docenti") { continue }
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    if ($content -match "Area Docenti</button>") { 
        continue 
    }
    
    $pattern = '(?s)(<a href="index\.html" class="nav-brand"[^>]*>.*?Prof\.\s*Belardi\s*Nicolino</span>\s*</a>)'
    $replacement = "<div style=`"display:flex; align-items:center;`">`$$1" + $buttonHtml + "</div>"
    
    if ($content -match $pattern) {
        $newContent = [regex]::Replace($content, $pattern, $replacement)
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Iniettato in $($file.Name)"
    }
}
