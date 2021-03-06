DOCUMENT_NAME = Arbeit
XELATEX = xelatex --shell-escape

default: 
	@echo 'make all    | Erstelle das komplette Dokument inklusive bib-Datei für das Literaturverzeichnis'
	@echo 'make bib    | Erstelle bib-Datei für Literaturverzeichnis'
	@echo 'make doc    | Erstelle komplettes Dokument und lese die Ausgabe. Falls Fehler auftreten führe make bib oder make doc erneut aus.'
	@echo 'make clean  | Säubere das Arbeitsverzeichnis von temporären Dateien und Verzeichnissen.'


all: clean doc bib doc_twice

bib: 
	bibtex $(DOCUMENT_NAME)

doc: 
	$(XELATEX) $(DOCUMENT_NAME).tex
	
doc_twice:
	$(XELATEX) $(DOCUMENT_NAME).tex
	$(XELATEX) $(DOCUMENT_NAME).tex

clean:
	rm -f .log quit.tex *.pyg *.acn *gdf *.glg *. glo *. gls *.ist *.lol *.nlo *.nls *.ps *.out *.dvi *.log *.aux *.blg *.toc *.log *.bbl *.lof *.lot *.idx *.brf *.ilg *.ind abschnitte/*.aux bilder/*.aux
