---
title: Mit Git Large File Storage (Git Große Dateien Speicher) zusammenarbeiten
intro: 'Wenn {{ site.data.variables.large_files.product_name_short }} aktiviert ist, kannst Du große Dateien abrufen, ändern und übertragen, wie Du es von jeder von Git verwalteten Datei erwartest. Benutzer, die nicht über {{ site.data.variables.large_files.product_name_short }} verfügen, erfahren dagegen einen anderen Workflow.'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Mitarbeiter an Deinem Repository {{ site.data.variables.large_files.product_name_short }} nicht installiert haben, haben sie keinen Zugriff auf die große Originaldatei. Wenn sie versuchen, Dein Repository zu klonen, rufen sie nur die Pointer-Dateien ab und haben keinen Zugriff auf die tatsächlichen Daten.

{% tip %}

**Tipp:** Um Benutzer zu unterstützen, die {{ site.data.variables.large_files.product_name_short }} nicht aktiviert haben, empfehlen wir Dir, Richtlinien für Repository-Mitwirkende festzulegen, in denen das Arbeiten mit großen Dateien erläutert wird. Du kannst Mitarbeiter beispielsweise bitten, große Dateien nicht zu ändern oder Änderungen auf einen Filesharing-Dienst wie [Dropbox](http://www.dropbox.com/) oder <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a> hochzuladen. Weitere Informationen findest Du unter „[Richtlinien für Repository-Mitarbeiter festlegen](/github/building-a-strong-community/setting-guidelines-for-repository-contributors).“

{% endtip %}

### Große Dateien in Pull Requests anzeigen

{{ site.data.variables.product.product_name }} stellt keine {{ site.data.variables.large_files.product_name_short }}-Objekte in Pull Requests dar. Only the pointer file is shown:

![Beispiel-Pull-Request für große Dateien](/assets/images/help/large_files/large_files_pr.png)

Weitere Informationen über Pointer-Dateien findest Du unter „[Über {{ site.data.variables.large_files.product_name_long }}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)."

Um Änderungen an großen Dateien zu sehen, checke den Pull Request lokal aus, um den Diff zu überprüfen. Weitere Informationen findest Du unter "[Pull Requests lokal ausckecken](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."

{% if currentVersion == "free-pro-team@latest" %}

### Große Dateien zu Forks pushen

Das Pushen großer Dateien zu Forks eines Repositorys wird zum Bandbreiten- und Speicherkontingent des übergeordneten Repositorys hinzugerechnet, nicht zum Kontingent des Fork-Inhabers.

Du kannst {{ site.data.variables.large_files.product_name_short }}-Objekte zu öffentlichen Forks übertragen, wenn das Repository-Netzwerk bereits {{ site.data.variables.large_files.product_name_short }}-Objekte enthält oder wenn Du Schreibzugriff auf den Root des Repository-Netzwerks besitzt.

{% endif %}

### Weiterführende Informationen

- „[Ein Repository mit 'Git Large File Storage'-Objekten duplizieren](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)“