/*

Gebe mir eine kleine Beschreibung des Themas, sowie 3 zufällige Foto-Ideen zum Thema "Schmuck" im Ausgabeformat eines JSON arrays mit "title" und "description". Verwende nicht den Wortlaut "Sie".
Zeige den Programm-Code in einer Code-Box an.

 */

let url = "https://pocket.lasseharm.space/api/collections/prompts/records"

let data =
    [
        {
            prompt_text: "Unschärfe",
            date: "03.01",
        },
        {
            prompt_text: "Magie",
            date: "04.01",
        },
        {
            prompt_text: "Scheinwerfer / Lichtkegel",
            date: "05.01",
        },
        {
            prompt_text: "Langsame Belichtungszeit",
            date: "06.01",
        },
        {
            prompt_text: "Texturen / Strukturen",
            date: "07.01",
        },
        {
            prompt_text: "Licht von hinten",
            date: "08.01",
        },
        {
            prompt_text: "Catchlight",
            date: "09.01",
        },
        {
            prompt_text: "Gestreift",
            date: "10.01",
            detail_text: "Das Thema Gestreift bezieht sich auf Bilder, die Streifen oder Linien in verschiedenen Formen und Richtungen zeigen. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Porträt mit gestreiftem Hintergrund",
                            "description": "Ein Porträt einer Person, bei dem der Hintergrund mit gestreiften Elementen, wie zum Beispiel einer gestreiften Wand oder Vorhänge, kontrastiert wird."
                        }, {
                            "title": "Gestreiftes Tier im Freien oder im Zoo",
                            "description": "Eine Aufnahme von einem gestreiften Tier, wie zum Beispiel einer Zebra, im Freien oder im Zoo."
                        }, {
                            "title": "Gestreifte Gegenstände in einem Cafe oder Restaurant",
                            "description": "Ein Foto von gestreiften Gegenständen, wie zum Beispiel gestreiften Stühlen oder Tischen in einem Cafe oder Restaurant."
                        }]

                }
        },
        {
            prompt_text: "Sternzeichen",
            date: "11.01",
            detail_text: "Sternzeichen beziehen sich auf astrologische Zeichen, die den Menschen zugewiesen werden, basierend auf dem Datum ihrer Geburt.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Porträt mit Sternzeichen-Motiv",
                            "description": "Ein Porträt einer Person, bei dem das Sternzeichen der Person in den Vordergrund gestellt wird, zum Beispiel durch ein Accessoire oder eine Gestik, die das Sternzeichen symbolisiert."
                        }, {
                            "title": "Sternzeichen-Symbole an interessanten Orten",
                            "description": "Ein Foto von Sternzeichen-Symbolen, wie zum Beispiel den Tierkreiszeichen, an einem interessanten Ort, wie zum Beispiel an einer Sternwarte oder in einem Museum."
                        }, {
                            "title": "Sternzeichen-inspirierte Kunstwerke oder Schmuckstücke",
                            "description": "Eine Aufnahme von Sternzeichen-Inspirierten Kunstwerken oder Schmuckstücken, zum Beispiel von einer Skulptur oder einem Schmuckstück, das das Symbol des Sternzeichens darstellt."
                        }]
                }
        },
        {
            prompt_text: "dynamische Anspannung",
            date: "12.01",
            detail_text: "Dynamische Anspannung bezieht sich auf Bilder, die eine gewisse Spannung oder Energie ausstrahlen",
            example_images:
                {
                    prompt_helper:
                        [
                            {
                                "title": "Hochspringer im Wettkampf",
                                "description": "Ein Foto von einem Hochspringer, während er sich für den Sprung bereit macht. Das Bild soll die Anspannung und Dynamik des Augenblicks einfangen, indem es den Athlet aus einer niedrigen Perspektive zeigt und das Gefühl von Bewegung vermittelt."
                            },
                            {
                                "title": "Reiter bei einem Springreiten",
                                "description": "Ein Foto von einem Reiter und seinem Pferd während eines Springreitturniers. Das Bild soll die Anspannung und Dynamik des Sports einfangen, indem es das Pferd und den Reiter inmitten eines Sprungs zeigt, wobei das Pferd möglicherweise über eine hohe Hindernisstange springt."
                            },
                            {
                                "title": "Tänzer in der Luft",
                                "description": "Ein Foto eines Tänzers bei einer Aufführung, während er sich in der Luft befindet. Das Bild soll die Anspannung und Dynamik des Tanzes einfangen, indem es den Tänzer in einer kraftvollen und anmutigen Pose zeigt und das Gefühl von Bewegung vermittelt. Es könnte auch ein Schwenk um den Tänzer herum aufgenommen werden, um die Dynamik noch stärker zu betonen."
                            }
                        ]
                }
        },
        {
            prompt_text: "Selbstporträt",
            date: "13.01",
            detail_text: "Ein Selbstporträt ist ein Foto, das von sich selbst aufgenommen wurde. Es kann dazu genutzt werden, um die Persönlichkeit und das Selbstverständnis des Fotografen auf künstlerische Weise darzustellen. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Selbstporträt mit Spiegelreflexion",
                            "description": "Ein Selbstporträt, das das Gesicht des Fotografen in der Spiegelreflexion eines Fensters oder eines anderen glänzenden Objekts zeigt. Dieses Bild könnte die Persönlichkeit und das Selbstverständnis des Fotografen auf eine subtile Weise widerspiegeln."
                        }, {
                            "title": "Kreatives Selbstporträt mit Accessoires",
                            "description": "Ein Selbstporträt, bei dem der Fotograf verschiedene Accessoires oder Requisiten verwendet, um eine künstlerische oder symbolische Aussage zu treffen. Zum Beispiel könnte das Selbstporträt ein bestimmtes Thema oder eine emotionale Stimmung vermitteln, indem es Masken, Kleidung, Schmuck oder andere Gegenstände einsetzt."
                        }, {
                            "title": "Selbstporträt im Freien",
                            "description": "Ein Selbstporträt, das den Fotografen in der Natur zeigt. Dieses Bild könnte die Verbindung des Fotografen mit der Natur oder einem bestimmten Ort betonen, indem es die Landschaft oder die Umgebung einfängt. Ein Selbstporträt im Freien könnte auch eine gute Gelegenheit sein, um kreative Perspektiven oder Lichtverhältnisse auszuprobieren."
                        }]

                }
        },
        {
            prompt_text: "Harris Shutter",
            date: "14.01",
            detail_text: "Der Harris Shutter ist eine Technik, bei der mehrere Bilder zu einem einzigen Foto zusammengesetzt werden, um Bewegungen oder Veränderungen in der Szene darzustellen. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Harris Shutter mit sich bewegenden Autos",
                            "description": "Ein Foto, das sich bewegende Autos auf einer Straße zeigt. Durch die Verwendung des Harris Shutters könnten die Autos in verschiedenen Stadien ihrer Bewegung dargestellt werden, was das Gefühl von Geschwindigkeit und Bewegung vermittelt."
                        }, {
                            "title": "Harris Shutter mit sich bewegenden Menschen",
                            "description": "Ein Foto, das sich bewegende Menschen zeigt, zum Beispiel beim Gehen oder Laufen. Durch die Verwendung des Harris Shutters könnten die Menschen in verschiedenen Stadien ihrer Bewegung dargestellt werden, was das Gefühl von Dynamik vermittelt."
                        }, {
                            "title": "Harris Shutter mit sich verändernden Landschaften",
                            "description": "Ein Foto, das sich verändernde Landschaften zeigt, zum Beispiel bei Sonnenauf- oder -untergang. Durch die Verwendung des Harris Shutters könnten die Veränderungen in der Landschaft in verschiedenen Stadien dargestellt werden, was das Gefühl von Veränderung und Zeitverlauf vermittelt."
                        }]

                }
        },
        {
            prompt_text: "Wasserspritzer",
            date: "15.01",
            detail_text: "Das Thema Wasserspritzer kann sich auf Fotos beziehen, die Wasserspritzer oder -tropfen zeigen, die in der Luft sind oder sich auf einer Oberfläche befinden. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Wasserspritzer bei einem Wasserschlacht",
                            "description": "Ein Foto von Menschen, die sich bei einer Wasserschlacht befinden. Das Bild könnte Wasserspritzer von den Wasserpistolen oder -ballons zeigen, um das Gefühl von Action und Spaß zu vermitteln."
                        }, {
                            "title": "Wasserspritzer von einem Springbrunnen",
                            "description": "Ein Foto von einem Springbrunnen, bei dem die Wasserspritzer von den Fontänen sichtbar sind. Das Bild könnte das Gefühl von Bewegung und Lebendigkeit vermitteln, indem es die Wasserspritzer in einer künstlerischen Weise darstellt."
                        }, {
                            "title": "Wasserspritzer von einem Wasserfall",
                            "description": "Ein Foto von einem Wasserfall, bei dem die Wasserspritzer von der fallenden Wassermasse sichtbar sind. Das Bild könnte das Gefühl von Kraft und Schönheit vermitteln, indem es die Wasserspritzer in einer dramatischen Weise darstellt."
                        }]

                }
        },
        {
            prompt_text: "Licht und Schatten",
            date: "16.01",
            detail_text: "Licht und Schatten beziehen sich auf die Verwendung von Licht und Dunkelheit in Fotos, um Tiefe, Textur und Dimension zu erzeugen.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Schattenriss-Porträts",
                            "description": "Eine Reihe von Porträts, bei denen die Schatten der Models im Vordergrund stehen. Diese Art von Fotos könnte eine graphische oder künstlerische Wirkung erzielen, indem sie die Schatten der Models in einer kreativen Weise einfängt."
                        }, {
                            "title": "Licht und Schatten in der Architektur",
                            "description": "Ein Foto, das Licht und Schatten in der Architektur zeigt, zum Beispiel ein Gebäude, bei dem Licht und Schatten auf bestimmte Bereiche des Gebäudes fallen und somit Tiefe und Textur erzeugen. Dieses Bild könnte die Schönheit und Struktur der Architektur betonen, indem es das Zusammenspiel von Licht und Schatten einfängt."
                        }, {
                            "title": "Licht und Schatten in der Natur",
                            "description": "Ein Foto, das Licht und Schatten in der Natur zeigt, zum Beispiel eine Landschaft, bei der Licht und Schatten auf bestimmte Bereiche der Landschaft fallen und somit Tiefe und Textur erzeugen. Dieses Bild könnte die Schönheit und Struktur der Natur betonen, indem es das Zusammenspiel von Licht und Schatten einfängt."
                        }]

                }
        },
        {
            prompt_text: "Schmuck",
            date: "17.01",
            detail_text: "Schmuck bezieht sich auf dekorative Gegenstände, die in der Regel aus Edelmetallen oder Steinen hergestellt werden und die meistens getragen werden. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Schmuckstücke in Szene setzen",
                            "description": "Ein Foto, das Schmuckstücke in einer künstlerischen oder kreativen Weise zeigt. Dieses Bild könnte den Schmuck als Hauptmotiv nutzen und ihn in einem interessanten Setting oder einer ausdrucksstarken Pose präsentieren."
                        },
                            {
                                "title": "Schmuck angelegt am Körper",
                                "description": "Ein Porträt, bei dem das Model Schmuck trägt und dieser im Foto zu sehen ist. Dieses Bild könnte das Selbstverständnis oder die Persönlichkeit des Models betonen, indem es den Schmuck als Ausdruck der Individualität einfängt."
                            },
                            {
                                "title": "Schmuckstücke im Detail",
                                "description": "Eine Reihe von Fotos, die Schmuckstücke im Detail zeigen. Diese Art von Fotos könnte die Schönheit und Qualität des Schmucks betonen, indem es die einzelnen Elemente oder Materialien des Schmucks hervorhebt."
                            }]
                }
        },
        {
            prompt_text: "In deiner Tasche",
            date: "18.01",
            detail_text: "In deiner Tasche ist ein Thema, das sich mit den Dingen befasst, die du normalerweise in deiner Tasche oder deinem Rucksack trägst",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Taschentücher, Geldbörse und Schlüssel",
                            "description": "Ein Foto von den Gegenständen, die du immer in deiner Tasche hast, wie zum Beispiel Taschentücher, Geldbörse und Schlüssel."
                        }, {
                            "title": "Reiseutensilien",
                            "description": "Ein Foto von den Dingen, die du bei einer Reise in deiner Tasche hast, wie zum Beispiel eine Karte, ein Reiseführer oder ein Handy."
                        }, {
                            "title": "Make-up und Schönheitsprodukte",
                            "description": "Ein Foto von den Schönheitsprodukten und dem Make-up, das du in deiner Tasche aufbewahrst, wie zum Beispiel Lipgloss, Mascara und Puder."
                        }]
                }
        },
        {
            prompt_text: "Dein Lieblingsplatz zu Hause",
            date: "19.01",
        },
        {
            prompt_text: "Nachspeise",
            date: "20.01",
        },
        {
            prompt_text: "Kabine / Hütte",
            date: "21.01",
        },
        {
            prompt_text: "Flanell",
            date: "22.01",
        },
        {
            prompt_text: "Deine Handschrift",
            date: "23.01",
        },
        {
            prompt_text: "Das Buch was du gerade liest",
            date: "24.01",
        },
        {
            prompt_text: "Uhr",
            date: "25.01",
        },
        {
            prompt_text: "Schlittenfahren",
            date: "26.01",
        },
        {
            prompt_text: "Eiszapfen",
            date: "27.01",
        },
        {
            prompt_text: "Kuscheln / Kuschelig",
            date: "28.01",
        },
        {
            prompt_text: "Schneeman",
            date: "29.01",
        },
        {
            prompt_text: "Gemütliches Licht",
            date: "30.01",
        },
        {
            prompt_text: "Räucherstäbchen",
            date: "31.01",
        },
        {
            prompt_text: "Doppelbelichtung",
            date: "01.02",
        },
        {
            prompt_text: "Innenbereich",
            date: "02.02",
        },
        {
            prompt_text: "Schlaf",
            date: "03.02",
        },
        {
            prompt_text: "Guilty Pleasure",
            date: "04.02",
        },
        {
            prompt_text: "Morgenhimmel",
            date: "05.02",
        },
        {
            prompt_text: "Süßigkeiten / Bonbon",
            date: "06.02",
        },
        {
            prompt_text: "Schleife/ Ribbon",
            date: "07.02",
        },
        {
            prompt_text: "Spiegel Foto",
            date: "08.02",
        },
        {
            prompt_text: "Blütenblätter",
            date: "09.02",
        },
        {
            prompt_text: "Etwas Pinkes",
            date: "10.02",
        },
        {
            prompt_text: "Hand in Hand",
            date: "11.02",
        },
        {
            prompt_text: "Augen",
            date: "12.02",
        },
        {
            prompt_text: "Etwas, dass du vor kurzem gekauf hast",
            date: "13.02",
        },
        {
            prompt_text: "Paare",
            date: "14.02",
        },
        {
            prompt_text: "Frostig / Eisig",
            date: "15.02",
        },
        {
            prompt_text: "Schokolade",
            date: "16.02",
        },
        {
            prompt_text: "Kollage",
            date: "17.02",
        },
        {
            prompt_text: "Streuung / Verteilung von Licht",
            date: "18.02",
        },
        {
            prompt_text: "Etwas, dass du an dir selber liebst",
            date: "19.02",
        },
        {
            prompt_text: "Kuss",
            date: "20.02",
        },
        {
            prompt_text: "Liebesbrief",
            date: "21.02",
        },
        {
            prompt_text: "Deine Familie",
            date: "22.02",
        },
        {
            prompt_text: "Date Night",
            date: "23.02",
        },
        {
            prompt_text: "Einsamkeit",
            date: "24.02",
        },
        {
            prompt_text: "Zuneigung",
            date: "25.02",
        },
        {
            prompt_text: "Bewegung",
            date: "26.02",
        },
        {
            prompt_text: "Türöffnung / Eingang",
            date: "27.02",
        },
        {
            prompt_text: "6 Unr Abends",
            date: "28.02",
        },
        {
            prompt_text: "Pastellfarben",
            date: "01.03",
        },
        {
            prompt_text: "Wiederholung",
            date: "02.03",
        },
        {
            prompt_text: "Abstrakt",
            date: "03.03",
        },
        {
            prompt_text: "Träume",
            date: "04.03",
        },
        {
            prompt_text: "Wirbel",
            date: "05.03",
        },
        {
            prompt_text: "Von oben",
            date: "06.03",
        },
        {
            prompt_text: "Nahaufnahme",
            date: "07.03",
        },
        {
            prompt_text: "Niedriger Winkel",
            date: "08.03",
        },
        {
            prompt_text: "Deine lieblings Farbe",
            date: "09.03",
        },
        {
            prompt_text: "Frisch",
            date: "10.03",
        },
        {
            prompt_text: "Städtisch / Urban",
            date: "11.03",
        },
        {
            prompt_text: "Stilleben",
            date: "12.03",
        },
        {
            prompt_text: "Meine Stadt",
            date: "13.03",
        },
        {
            prompt_text: "Mit einem Stativ",
            date: "14.03",
        },
        {
            prompt_text: "Natur",
            date: "15.03",
        },
        {
            prompt_text: "Vintage",
            date: "16.03",
        },
        {
            prompt_text: "Dokumentarfilm",
            date: "17.03",
        },
        {
            prompt_text: "Tinte",
            date: "18.03",
        },
        {
            prompt_text: "Scharf",
            date: "19.03",
        },
        {
            prompt_text: "Blitz",
            date: "20.03",
        },
        {
            prompt_text: "Schmelzender Schnee",
            date: "21.03",
        },
        {
            prompt_text: "Flauschig",
            date: "22.03",
        },
        {
            prompt_text: "Cosplay",
            date: "23.03",
        },
        {
            prompt_text: "Zoom in",
            date: "24.03",
        },
        {
            prompt_text: "Kindheitserinnerung",
            date: "25.03",
        },
        {
            prompt_text: "Führende Linien",
            date: "26.03",
        },
        {
            prompt_text: "Rule of thirds",
            date: "27.03",
        },
        {
            prompt_text: "Dreieck",
            date: "28.03",
        },
        {
            prompt_text: "Studio",
            date: "29.03",
        },
        {
            prompt_text: "Nachtleben",
            date: "30.03",
        },
        {
            prompt_text: "Hässlicher Ort",
            date: "31.03",
        },
        {
            prompt_text: "Glücksfall",
            date: "01.04",
        },
        {
            prompt_text: "Spaziergang",
            date: "02.04",
        },
        {
            prompt_text: "Lieblingszeit am Tag",
            date: "03.04",
        },
        {
            prompt_text: "Spiele",
            date: "04.04",
        },
        {
            prompt_text: "Sprießende Blumen",
            date: "05.04",
        },
        {
            prompt_text: "Das Objekt neben dir",
            date: "06.04",
        },
        {
            prompt_text: "Gesichtslos",
            date: "07.04",
        },
        {
            prompt_text: "Farbenfroh",
            date: "08.04",
        },
        {
            prompt_text: "HRD",
            date: "09.04",
        },
        {
            prompt_text: "Color-blocking",
            date: "10.04",
        },
        {
            prompt_text: "Kein Filter",
            date: "11.04",
        },
        {
            prompt_text: "Negativer Raum",
            date: "12.04",
        },
        {
            prompt_text: "11:11 Vormittag",
            date: "13.04",
        },
        {
            prompt_text: "Wind",
            date: "14.04",
        },
        {
            prompt_text: "Schwebezustand",
            date: "15.04",
        },
        {
            prompt_text: "G steht für",
            date: "16.04",
        },
        {
            prompt_text: "Hell / Leuchtend",
            date: "17.04",
        },
        {
            prompt_text: "Ostereier Dekoration",
            date: "18.04",
        },
        {
            prompt_text: "Motion Blur",
            date: "19.04",
        },
        {
            prompt_text: "Schlammiger Fußabdruck",
            date: "20.04",
        },
        {
            prompt_text: "Regenbogen",
            date: "21.04",
        },
        {
            prompt_text: "Narzissen",
            date: "22.04",
        },
        {
            prompt_text: "Saatgut einpflanzen",
            date: "23.04",
        },
        {
            prompt_text: "Natürlich",
            date: "24.04",
        },
        {
            prompt_text: "Weit entfernt",
            date: "25.04",
        },
        {
            prompt_text: "Dein Abend",
            date: "26.04",
        },
        {
            prompt_text: "Entspannung",
            date: "27.04",
        },
        {
            prompt_text: "Nackt",
            date: "28.04",
        },
        {
            prompt_text: "Kucken",
            date: "29.04",
        },
        {
            prompt_text: "Bienen",
            date: "30.04",
        },
        {
            prompt_text: "Aktuelle Stimmung",
            date: "01.05",
        },
        {
            prompt_text: "Am meisten geschätzter Gegenstand",
            date: "02.05",
        },
        {
            prompt_text: "Emotionen",
            date: "03.05",
        },
        {
            prompt_text: "Grass",
            date: "04.05",
        },
        {
            prompt_text: "Mond",
            date: "05.05",
        },
        {
            prompt_text: "Vogel",
            date: "06.05",
        },
        {
            prompt_text: "Blaue Stunde",
            date: "07.05",
        },
        {
            prompt_text: "Goldene Stunde",
            date: "08.05",
        },
        {
            prompt_text: "Macro",
            date: "09.05",
        },
        {
            prompt_text: "Sterne",
            date: "10.05",
        },
        {
            prompt_text: "W steht für",
            date: "10.05",
        },
        {
            prompt_text: "Rain",
            date: "11.05",
        },
        {
            prompt_text: "In meinem Kopf",
            date: "12.05",
        },
        {
            prompt_text: "Fahrrad",
            date: "13.05",
        },
        {
            prompt_text: "Erde",
            date: "14.05",
        },
        {
            prompt_text: "Yoga",
            date: "15.05",
        },
        {
            prompt_text: "Zubehör",
            date: "16.05",
        },
        {
            prompt_text: "Wandern",
            date: "17.05",
        },
        {
            prompt_text: "Barfuß",
            date: "18.05",
        },
        {
            prompt_text: "Horizont",
            date: "19.05",
        },
        {
            prompt_text: "Blumenkronen",
            date: "20.05",
        },
        {
            prompt_text: "Puzzel",
            date: "21.05",
        },
        {
            prompt_text: "Unauffällig",
            date: "22.05",
        },
        {
            prompt_text: "Kontrast",
            date: "23.05",
        },
        {
            prompt_text: "Musik",
            date: "24.05",
        },
        {
            prompt_text: "Cinemagraph",
            date: "25.05",
        },
        {
            prompt_text: "Foto mit einem Handy",
            date: "26.05",
        },
        {
            prompt_text: "Wegwerfkamera",
            date: "27.05",
        },
        {
            prompt_text: "Geld",
            date: "28.05",
        },
        {
            prompt_text: "Post",
            date: "29.05",
        },
        {
            prompt_text: "Sonne",
            date: "30.05",
        },
        {
            prompt_text: "Handtuch",
            date: "31.05",
        },
        {
            prompt_text: "Tanzen",
            date: "01.06",
        },
        {
            prompt_text: "Streulicht",
            date: "02.06",
        },
        {
            prompt_text: "Blasen",
            date: "03.06",
        },
        {
            prompt_text: "Feuerwerk",
            date: "04.06",
        },
        {
            prompt_text: "Graffiti",
            date: "05.06",
        },
        {
            prompt_text: "Hausdächer",
            date: "06.06",
        },
        {
            prompt_text: "Sonnenbrille",
            date: "07.06",
        },
        {
            prompt_text: "Picknick",
            date: "08.06",
        },
        {
            prompt_text: "Sonnenuntergang",
            date: "09.06",
        },
        {
            prompt_text: "Lange Belichtungszeit",
            date: "10.06",
        },
        {
            prompt_text: "Sport",
            date: "11.06",
        },
        {
            prompt_text: "Umarmung",
            date: "12.06",
        },
        {
            prompt_text: "Lächeln",
            date: "13.06",
        },
        {
            prompt_text: "Springen",
            date: "14.06",
        },
        {
            prompt_text: "Ein völlig Fremder",
            date: "15.06",
        },
        {
            prompt_text: "Rauch",
            date: "16.06",
        },
        {
            prompt_text: "Ein Bild im Bild",
            date: "17.06",
        },
        {
            prompt_text: "Erzwungene Perspektive",
            date: "18.06",
        },
        {
            prompt_text: "Lichtmalerei",
            date: "19.06",
        },
        {
            prompt_text: "Hergestellt aus Holz",
            date: "20.06",
        },
        {
            prompt_text: "Panorama",
            date: "21.06",
        },
        {
            prompt_text: "Nacht",
            date: "22.06",
        },
        {
            prompt_text: "Hände",
            date: "23.06",
        },
        {
            prompt_text: "Fahrzeug",
            date: "24.06",
        },
        {
            prompt_text: "Frisches Obst",
            date: "25.06",
        },
        {
            prompt_text: "Glitzer",
            date: "26.06",
        },
        {
            prompt_text: "Haustiere",
            date: "27.06",
        },
        {
            prompt_text: "Aus der Ferne",
            date: "28.06",
        },
        {
            prompt_text: "Schmetterling",
            date: "29.06",
        },
        {
            prompt_text: "Upsidedown",
            date: "30.06",
        },
        {
            prompt_text: "Wolkenkratzer",
            date: "01.07",
        },
        {
            prompt_text: "Polka Dots",
            date: "02.07",
        },
        {
            prompt_text: "Wassermelone",
            date: "03.07",
        },
        {
            prompt_text: "Feuerstelle",
            date: "04.07",
        },
        {
            prompt_text: "Wasser",
            date: "05.07",
        },
        {
            prompt_text: "Vogelperspektive",
            date: "06.07",
        },
        {
            prompt_text: "Verwenden mal ein anderes Objektiv",
            date: "07.07",
        },
        {
            prompt_text: "Brunnen",
            date: "08.07",
        },
        {
            prompt_text: "Wildtiere",
            date: "09.07",
        },
        {
            prompt_text: "1. Person, die du gesehen hast",
            date: "10.07",
        },
        {
            prompt_text: "Etwas gelbes",
            date: "11.07",
        },
        {
            prompt_text: "Luftballons",
            date: "12.07",
        },
        {
            prompt_text: "Tattoo",
            date: "13.07",
        },
        {
            prompt_text: "Etwas durchsichtiges",
            date: "14.07",
        },
        {
            prompt_text: "Federn",
            date: "15.07",
        },
        {
            prompt_text: "Neon",
            date: "16.07",
        },
        {
            prompt_text: "Reflexionen",
            date: "17.07",
        },
        {
            prompt_text: "Silhouette",
            date: "18.07",
        },
        {
            prompt_text: "Gebrochen / Zerbrochen",
            date: "19.07",
        },
        {
            prompt_text: "Eis",
            date: "20.07",
        },
        {
            prompt_text: "Symmetrie",
            date: "21.07",
        },
        {
            prompt_text: "Straßenfotografie",
            date: "22.07",
        },
        {
            prompt_text: "Etwas, dass dich zum Lächeln bringt",
            date: "23.07",
        },
        {
            prompt_text: "Der Blick aus deinem Fenster",
            date: "24.07",
        },
        {
            prompt_text: "Ein altes Foto nachstellen",
            date: "25.07",
        },
        {
            prompt_text: "Outfit des Tages",
            date: "26.07",
        },
        {
            prompt_text: "Regen",
            date: "27.07",
        },
        {
            prompt_text: "Zerbrechlich",
            date: "28.07",
        },
        {
            prompt_text: "Gegensätze",
            date: "29.07",
        },
        {
            prompt_text: "Lips",
            date: "30.07",
        },
        {
            prompt_text: "Treppen",
            date: "31.07",
        },
        {
            prompt_text: "Porträt mit Gegenlicht",
            date: "01.08",
        },
        {
            prompt_text: "Ein anderer Fotograf",
            date: "02.08",
        },
        {
            prompt_text: "Technologie",
            date: "03.08",
        },
        {
            prompt_text: "Etwas rotes",
            date: "04.08",
        },
        {
            prompt_text: "Himmel",
            date: "05.08",
        },
        {
            prompt_text: "Ring",
            date: "06.08",
        },
        {
            prompt_text: "Auf dem Boden",
            date: "07.08",
        },
        {
            prompt_text: "Riesenrad",
            date: "08.08",
        },
        {
            prompt_text: "Wasserfall",
            date: "09.08",
        },
        {
            prompt_text: "Haare",
            date: "10.08",
        },
        {
            prompt_text: "Im Kühlschrank",
            date: "11.08",
        },
        {
            prompt_text: "Ein Modefoto",
            date: "12.08",
        },
        {
            prompt_text: "Blitzschlag / Gewitter",
            date: "13.08",
        },
        {
            prompt_text: "Schwimmen",
            date: "14.08",
        },
        {
            prompt_text: "freelensing Porträt",
            date: "15.08",
        },
        {
            prompt_text: "Pferde",
            date: "16.08",
        },
        {
            prompt_text: "Bunte Wassertropfen",
            date: "17.08",
        },
        {
            prompt_text: "Unter der Seebrücke / Pier / Mole",
            date: "18.08",
        },
        {
            prompt_text: "Laternenfest",
            date: "19.08",
        },
        {
            prompt_text: "Infrarot-Fotografie",
            date: "20.08",
        },
        {
            prompt_text: "Neblige Landschaft",
            date: "21.08",
        },
        {
            prompt_text: "Quadratisch",
            date: "22.08",
        },
        {
            prompt_text: "Kinder",
            date: "23.08",
        },
        {
            prompt_text: "Details",
            date: "24.08",
        },
        {
            prompt_text: "Konzert",
            date: "25.08",
        },
        {
            prompt_text: "Natürliches Licht",
            date: "26.08",
        },
        {
            prompt_text: "Mit Schatten spielen",
            date: "27.08",
        },
        {
            prompt_text: "A steht für",
            date: "28.08",
        },
        {
            prompt_text: "Surreal",
            date: "29.08",
        },
        {
            prompt_text: "Tägliche Gewohnheit",
            date: "30.08",
        },
        {
            prompt_text: "Kirschen",
            date: "31.08",
        },
        {
            prompt_text: "Minimalismus",
            date: "01.09",
        },
        {
            prompt_text: "Dein Hobby",
            date: "02.09",
        },
        {
            prompt_text: "15.00 Uhr",
            date: "03.09",
        },
        {
            prompt_text: "Manueller Fokus",
            date: "04.09",
        },
        {
            prompt_text: "Einen Song interpretieren",
            date: "05.09",
        },
        {
            prompt_text: "Mit einer Requisite",
            date: "06.09",
        },
        {
            prompt_text: "Beste Freunde",
            date: "07.09",
        },
        {
            prompt_text: "Schaukel",
            date: "08.09",
        },
        {
            prompt_text: "Muster",
            date: "09.09",
        },
        {
            prompt_text: "Ein Geruch, den du magst",
            date: "10.09",
        },
        {
            prompt_text: "Funkeln",
            date: "11.09",
        },
        {
            prompt_text: "Architektur",
            date: "12.09",
        },
        {
            prompt_text: "Vorher und nachher",
            date: "13.09",
        },
        {
            prompt_text: "Straßenschild",
            date: "14.09",
        },
        {
            prompt_text: "Dein Arbeitsplatz",
            date: "15.09",
        },
        {
            prompt_text: "Das Wetter",
            date: "16.09",
        },
        {
            prompt_text: "Früh Morgens",
            date: "17.09",
        },
        {
            prompt_text: "Garten",
            date: "18.09",
        },
        {
            prompt_text: "Unerwartet",
            date: "19.09",
        },
        {
            prompt_text: "L steht für",
            date: "20.09",
        },
        {
            prompt_text: "Ernte",
            date: "21.09",
        },
        {
            prompt_text: "Blätter",
            date: "22.09",
        },
        {
            prompt_text: "Mosaik",
            date: "23.09",
        },
        {
            prompt_text: "Skulpturen",
            date: "24.09",
        },
        {
            prompt_text: "Sepia",
            date: "25.09",
        },
        {
            prompt_text: "Parallele Linien",
            date: "26.09",
        },
        {
            prompt_text: "Falten",
            date: "27.09",
        },
        {
            prompt_text: "Deine Schuhe",
            date: "28.09",
        },
        {
            prompt_text: "Eine schlechte Angewohnheit",
            date: "29.09",
        },
        {
            prompt_text: "Etwas leckeres",
            date: "30.09",
        },
        {
            prompt_text: "Dunkel und launisch",
            date: "01.10",
        },
        {
            prompt_text: "Wovor du dich fürchten",
            date: "02.10",
        },
        {
            prompt_text: "Pfütze",
            date: "03.10",
        },
        {
            prompt_text: "Gold",
            date: "04.10",
        },
        {
            prompt_text: "Kunst",
            date: "05.10",
        },
        {
            prompt_text: "Deine Stadt",
            date: "06.10",
        },
        {
            prompt_text: "Schnitt / Scheibe",
            date: "07.10",
        },
        {
            prompt_text: "Einfach",
            date: "08.10",
        },
        {
            prompt_text: "Ein Vogelschwarm",
            date: "09.10",
        },
        {
            prompt_text: "Metal",
            date: "10.10",
        },
        {
            prompt_text: "Herbstliches Flat Lay",
            date: "11.10",
        },
        {
            prompt_text: "Brücke",
            date: "12.10",
        },
        {
            prompt_text: "fließendes Wasser",
            date: "13.10",
        },
        {
            prompt_text: "Etwas braunes",
            date: "14.10",
        },
        {
            prompt_text: "Unter etwas anderem drunter",
            date: "15.10",
        },
        {
            prompt_text: "Road Trip",
            date: "16.10",
        },
        {
            prompt_text: "Auf dem Boden liegende Blätter",
            date: "17.10",
        },
        {
            prompt_text: "Kuchen",
            date: "18.10",
        },
        {
            prompt_text: "Pfad",
            date: "19.10",
        },
        {
            prompt_text: "Steine",
            date: "20.10",
        },
        {
            prompt_text: "Straßenlaternen",
            date: "21.10",
        },
        {
            prompt_text: "Jeansstoff",
            date: "22.10",
        },
        {
            prompt_text: "Bauernmarkt",
            date: "23.10",
        },
        {
            prompt_text: "Verlassen / Lost Place",
            date: "24.10",
        },
        {
            prompt_text: "Flüssigkeit",
            date: "25.10",
        },
        {
            prompt_text: "Zaun",
            date: "26.10",
        },
        {
            prompt_text: "Spinnennetz",
            date: "27.10",
        },
        {
            prompt_text: "Gespenstisch",
            date: "28.10",
        },
        {
            prompt_text: "B steht für",
            date: "29.10",
        },
        {
            prompt_text: "Kürbis",
            date: "30.10",
        },
        {
            prompt_text: "Friedhof",
            date: "31.10",
        },
        {
            prompt_text: "In einem Auto",
            date: "01.11",
        },
        {
            prompt_text: "N steht für",
            date: "02.11",
        },
        {
            prompt_text: "Einkaufen",
            date: "03.11",
        },
        {
            prompt_text: "Tor / Pforte",
            date: "04.11",
        },
        {
            prompt_text: "Wald",
            date: "05.11",
        },
        {
            prompt_text: "Rustikal",
            date: "06.11",
        },
        {
            prompt_text: "M steht für",
            date: "07.11",
        },
        {
            prompt_text: "Zimt",
            date: "08.11",
        },
        {
            prompt_text: "Handgefertigt",
            date: "09.11",
        },
        {
            prompt_text: "Münzen",
            date: "10.11",
        },
        {
            prompt_text: "Pilz",
            date: "11.11",
        },
        {
            prompt_text: "Baum",
            date: "12.11",
        },
        {
            prompt_text: "Schlösser",
            date: "13.11",
        },
        {
            prompt_text: "Flasche",
            date: "14.11",
        },
        {
            prompt_text: "Sammlung",
            date: "15.11",
        },
        {
            prompt_text: "Teller",
            date: "16.11",
        },
        {
            prompt_text: "Inspiriert durch einen Film",
            date: "17.11",
        },
        {
            prompt_text: "Künstliches Licht",
            date: "18.11",
        },
        {
            prompt_text: "Unedited / Edited",
            date: "19.11",
        },
        {
            prompt_text: "Abenteuer",
            date: "20.11",
        },
        {
            prompt_text: "Abendliches Ritual",
            date: "21.11",
        },
        {
            prompt_text: "Schwarzweiß",
            date: "22.11",
        },
        {
            prompt_text: "In einer Reihe",
            date: "23.11",
        },
        {
            prompt_text: "Unvollkommen / Unvollständig",
            date: "24.11",
        },
        {
            prompt_text: "Bodennähe",
            date: "25.11",
        },
        {
            prompt_text: "Gemüse",
            date: "26.11",
        },
        {
            prompt_text: "Bögen",
            date: "27.11",
        },
        {
            prompt_text: "Nudeln",
            date: "28.11",
        },
        {
            prompt_text: "Ein bedeutsamer Ort",
            date: "29.11",
        },
        {
            prompt_text: "Kirche",
            date: "30.11",
        },
        {
            prompt_text: "Frühstück",
            date: "01.12",
        },
        {
            prompt_text: "Schichten / Ebenen",
            date: "02.12",
        },
        {
            prompt_text: "D steht für",
            date: "03.12",
        },
        {
            prompt_text: "Socken",
            date: "04.12",
        },
        {
            prompt_text: "Kamin / Feuerstelle",
            date: "05.12",
        },
        {
            prompt_text: "Etwas grünes",
            date: "06.12",
        },
        {
            prompt_text: "Monochrome",
            date: "07.12",
        },
        {
            prompt_text: "Im Bett",
            date: "08.12",
        },
        {
            prompt_text: "Ornamente / Verzierungen",
            date: "09.12",
        },
        {
            prompt_text: "Kekse",
            date: "10.12",
        },
        {
            prompt_text: "Work in progress",
            date: "11.12",
        },
        {
            prompt_text: "Pullover",
            date: "12.12",
        },
        {
            prompt_text: "Weihnachtsbeleuchtung im Freien",
            date: "13.12",
        },
        {
            prompt_text: "Weihnachtsbaum",
            date: "14.12",
        },
        {
            prompt_text: "Kerzen",
            date: "15.12",
        },
        {
            prompt_text: "Zuckerstange",
            date: "16.12",
        },
        {
            prompt_text: "Winter",
            date: "17.12",
        },
        {
            prompt_text: "Geschenkpapier",
            date: "18.12",
        },
        {
            prompt_text: "Heiße Schokolade",
            date: "19.12",
        },
        {
            prompt_text: "Backen",
            date: "20.12",
        },
        {
            prompt_text: "Geschenke",
            date: "21.12",
        },
        {
            prompt_text: "Flamme",
            date: "22.12",
        },
        {
            prompt_text: "Nadelbaum",
            date: "23.12",
        },
        {
            prompt_text: "Bokeh",
            date: "24.12",
        },
        {
            prompt_text: "Geschenke auspacken",
            date: "25.12",
        },
        {
            prompt_text: "Silber",
            date: "26.12",
        },
        {
            prompt_text: "Tannenzapfen",
            date: "27.12",
        },
        {
            prompt_text: "Suppe",
            date: "28.12",
        },
        {
            prompt_text: "T steht für",
            date: "29.12",
        },
        {
            prompt_text: "Heutige Temperatur",
            date: "30.12",
        },
        {
            prompt_text: "Ein Gedanke für das nächste Jahr",
            date: "31.12",
        },

    ];

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

async function run() {
    for (const dataKey in data) {
        postData(url, data[dataKey])
        await delay(100);
    }

}

run();