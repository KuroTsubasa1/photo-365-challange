/*

Gebe mir eine kleine Beschreibung des Themas, sowie 3 zufällige Foto-Ideen zum Thema "Schmuck" im Ausgabeformat eines JSON arrays mit "title" und "description". Verwende nicht den Wortlaut "Sie".
Zeige den Programm-Code in einer Code-Box an.

continue by finishing that last code block
please finish starting at that last code block, and DO NOT start from the beginning


 */

let url = "https://pocket.lasseharm.space/api/collections/prompts/records"

let data =
    [
        {
            prompt_text: "Unschärfe",
            date: "03.01",
            detail_text: "",
        },
        {
            prompt_text: "Magie",
            date: "04.01",
            detail_text: "",
        },
        {
            prompt_text: "Scheinwerfer / Lichtkegel",
            date: "05.01",
            detail_text: "",
        },
        {
            prompt_text: "Langsame Belichtungszeit",
            date: "06.01",
            detail_text: "",
        },
        {
            prompt_text: "Texturen / Strukturen",
            date: "07.01",
            detail_text: "",
        },
        {
            prompt_text: "Licht von hinten",
            date: "08.01",
            detail_text: "",
        },
        {
            prompt_text: "Catchlight",
            date: "09.01",
            detail_text: "",
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
            detail_text: "",
            example_images:
                {
                    prompt_helper:
                        [
                            {
                                "title": "Der gemütliche Lesesessel",
                                "description": "Ein Foto von Ihrem gemütlichen Lesesessel, umgeben von Büchern, Kerzen und einer Decke."

                            },
                            {
                                "title": "Die Kaffeetafel",
                                "description": "Ein Foto von Ihrer Kaffeetafel mit einer Tasse Kaffee, einer Tageszeitung und einer schönen Aussicht."

                            },
                            {
                                "title": "Der Gartenparadies",
                                "description": "Ein Foto von Ihrem Lieblingsplatz im Garten, mit einem schönen Blick und vielleicht einer Sitzgruppe oder einem Liegestuhl."
                            }
                        ]
                }

        },
        {
            prompt_text: "Nachspeise",
            date: "20.01",
            detail_text: "Nachspeise bezieht sich auf ein Essen, das nach einer Mahlzeit gegessen wird, in der Regel süß und als besonderer Genuss. Es kann eine große Vielfalt an Nachspeisen geben, von süßen Kuchen und Torten, über Puddings, Eis bis hin zu Obstplatten.",
            example_images:
                {
                    prompt_helper:
                        [
                            {
                                "title": "Der Käsekuchen",
                                "description": "Ein Foto von einem leckeren und frischen Käsekuchen mit Früchten und Schlagsahne."

                            },
                            {
                                "title": "Die Eis-Creme",
                                "description": "Ein Foto von einer Kugel Eis-Creme in einer Waffel oder im Becher mit verschiedenen Toppings und Saucen."

                            },
                            {
                                "title": "Die Schokoladentorte",
                                "description": "Ein Foto von einer schokoladigen und saftigen Torte, vielleicht mit Schokoladensauce und Schlagsahne."
                            }
                        ]
                }

        },
        {
            prompt_text: "Kabine / Hütte",
            date: "21.01",
            detail_text: "Eine Hütte ist ein kleines, meist einfach ausgestattetes Gebäude, das in ländlichen Gebieten oder in den Bergen als Unterkunft genutzt wird. Sie kann entweder feststehend oder mobil sein und wird oft für Outdoor-Aktivitäten wie Wandern, Skifahren oder Camping genutzt. Ein Fotograf kann verschiedene Aspekte der Hüttenwelt einfangen, von der Schönheit der Umgebung bis hin zu der gemütlichen und rustikalen Atmosphäre innen.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Einsam in den Bergen",
                            "description": "Eine verlassene Hütte mitten in den Bergen, umgeben von unberührter Natur und einer beeindruckenden Aussicht. Dieses Foto vermittelt ein Gefühl von Einsamkeit und Abenteuer."

                        }, {
                            "title": "Rustikale Eleganz",
                            "description": "Eine Hütte im rustikalen Stil, aber mit modernen Annehmlichkeiten ausgestattet. Dieses Foto zeigt, wie man Raffinesse und Natur vereinen kann und eine gemütliche aber auch elegante Atmosphäre schafft."

                        }, {
                            "title": "Familienidylle",
                            "description": "Eine Familie, die in einer Hütte im Wald entspannt und Zeit miteinander verbringt. Dieses Foto vermittelt ein Gefühl von Zusammengehörigkeit und Glück."
                        }]
                }

        },
        {
            prompt_text: "Flanell",
            date: "22.01",
            detail_text: "Flanell ist ein weiches, wärmendes und meist aus Baumwolle gewebtes Material, das ursprünglich in der Arbeitskleidung verwendet wurde. Es hat jedoch in den letzten Jahren an Popularität in der Freizeitbekleidung gewonnen und ist heute ein Klassiker in der Herbst- und Winterkleidung. Ein Fotograf kann verschiedene Aspekte von Flanell einfangen, von der Textur und Farbe des Stoffes bis hin zu den Outfits und der Umgebung in der es getragen wird.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Einsam in den Bergen",
                            "description": "Eine verlassene Hütte mitten in den Bergen, umgeben von unberührter Natur und einer beeindruckenden Aussicht. Dieses Foto vermittelt ein Gefühl von Einsamkeit und Abenteuer."

                        }, {
                            "title": "Rustikale Eleganz",
                            "description": "Eine Hütte im rustikalen Stil, aber mit modernen Annehmlichkeiten ausgestattet. Dieses Foto zeigt, wie man Raffinesse und Natur vereinen kann und eine gemütliche aber auch elegante Atmosphäre schafft."

                        }, {
                            "title": "Familienidylle",
                            "description": "Eine Familie, die in einer Hütte im Wald entspannt und Zeit miteinander verbringt. Dieses Foto vermittelt ein Gefühl von Zusammengehörigkeit und Glück."
                        }]
                }

        },
        {
            prompt_text: "Deine Handschrift",
            date: "23.01",
            detail_text: "Die Handschrift ist die Art und Weise, wie jemand schreibt. Es ist ein unverwechselbares Merkmal, das von Person zu Person variiert. Handschrift kann für den Schreibprozess von Dokumenten, Briefen, Notizen und sogar als künstlerisches Medium verwendet werden. Ein Fotograf kann die Schönheit und Individualität der Handschrift einfangen, indem er sie in verschiedenen Kontexten und auf unterschiedlichen Untergründen zeigt. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Schrift als Kunst",
                            "description": "Ein Foto von einer handschriftlichen Skizze oder einem Zitat, das als künstlerisches Statement auf einer Leinwand oder einem Papier präsentiert wird. Es zeigt die Schönheit der Handschrift als eine Form der Kunst."
                        }, {
                            "title": "Handschrift im Alltag",
                            "description": "Ein Foto von jemandem, der einen Brief oder eine Notiz schreibt, in einer natürlichen und alltäglichen Umgebung. Es zeigt die Verwendung der Handschrift in unserem täglichen Leben und die Persönlichkeit, die sie vermittelt."
                        }, {
                            "title": "Vergänglichkeit der Handschrift",
                            "description": "Ein Foto von verblassender oder verblasster Handschrift auf alten Dokumenten, Büchern oder Wänden. Es zeigt die Vergänglichkeit der Handschrift und die historische und kulturelle Bedeutung, die sie hat"
                        }]
                }
        },
        {
            prompt_text: "Das Buch was du gerade liest",
            date: "24.01",
            detail_text: "Das Buch, das man gerade liest, kann sowohl eine physische als auch eine digitale Form haben, es kann ein Roman, ein Sachbuch, ein Tagebuch oder ein anderes Genre sein. Es kann auch eine persönliche oder emotionale Bedeutung haben und kann als Symbol für eine bestimmte Erfahrung oder einen Lebensabschnitt stehen. Ein Fotograf kann die Schönheit und Bedeutung des Buches einfangen, indem er es in verschiedenen Kontexten und Umgebungen zeigt.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Ein Ort zum Lesen",
                            "description": "Ein Foto von jemandem, der das Buch an einem besonderen Ort liest, z.B. am Strand, im Park, auf einer Bank oder in einer Bibliothek. Es zeigt die Beziehung zwischen dem Ort und dem Buch sowie die Atmosphäre, die das Lesen bereitet."
                        }, {
                            "title": "Ein intimer Moment",
                            "description": "Ein Foto von jemandem, der das Buch in einer privaten Umgebung liest, z.B. zu Hause, im Bett oder in einem Cafe. Es zeigt die Intimität des Lesens und die persönliche Beziehung, die man zu dem Buch hat."
                        }, {
                            "title": "Eine Reise in der Zeit",
                            "description": "Ein Foto von einem alten oder seltenen Buch, das man gerade liest. Es zeigt die historische und kulturelle Bedeutung des Buches sowie die Reise in der Zeit, die es dem Leser ermöglicht."
                        }]

                }
        },
        {
            prompt_text: "Uhr",
            date: "25.01",
            detail_text: "Eine Uhr ist ein Gerät, das die Zeit misst und anzeigt. Es gibt viele Arten von Uhren, von antiken mechanischen Uhren bis hin zu modernen digitalen Uhren. Uhren können sowohl funktional als auch dekorativ sein und haben oft eine emotionale oder symbolische Bedeutung. Ein Fotograf kann die Schönheit und Bedeutung der Uhr einfangen, indem er sie in verschiedenen Kontexten und Umgebungen zeigt.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Verfallene Uhr",
                            "description": "Ein Foto einer alten, verfallenen Uhr, die in einem verlassenen Gebäude oder einer verfallenen Umgebung steht. Es zeigt die Vergänglichkeit der Zeit und die Erinnerungen, die eine Uhr tragen kann."
                        }, {
                            "title": "Zeitlos",
                            "description": "Ein Foto von einer modernen Uhr, die in einer Umgebung präsentiert wird, die unabhängig von der Zeit ist, z.B. in der Natur oder im Weltraum. Es zeigt die Unendlichkeit der Zeit und die Unabhängigkeit von der Uhr."
                        }, {
                            "title": "Eine Familienerinnerung",
                            "description": "Ein Foto von einer antiken mechanischen Uhr, die im Besitz einer Familie ist und die Generationen überdauert hat. Es zeigt die emotionale Bedeutung und die Erinnerungen, die eine Uhr tragen kann."
                        }]
                }
        },
        {
            prompt_text: "Schlittenfahren",
            date: "26.01",
            detail_text: "Schlittenfahren ist eine Wintersportart, bei der man auf einem Schlitten durch Schnee und Eis gleitet. Es kann sowohl als Freizeitaktivität als auch als Wettkampf betrieben werden. Ein Fotograf kann die Schönheit und die Dynamik des Schlittenfahrens einfangen, indem er die Landschaft, die Bewegungen der Athleten und die Emotionen zeigt, die die Sportart aufbringt.",
            example_images:
                {
                    prompt_helper:
                        [
                            {
                                "title": "Eine rasante Fahrt",
                                "description": "Ein Foto von jemandem, der mit hoher Geschwindigkeit auf einem Schlitten durch den Schnee fährt. Es zeigt die Aufregung und die Freude des Schlittenfahrens"
                            },
                            {
                                "title": "Ein ruhiger Moment",
                                "description": "Ein Foto von jemandem, der langsam auf einem Schlitten durch eine verschneite Landschaft fährt. Es zeigt die Schönheit und Ruhe des Schlittenfahrens und die Natur, die es umgibt."
                            },
                            {
                                "title": "Abenteuer im Schnee",
                                "description": "Ein Foto von Menschen, die auf einem Schlitten durch unberührte Schneelandschaft fahren, vielleicht mit Pferden oder Hunden gezogen. Es zeigt die Schönheit und die Freiheit des Wintersports und die Abenteuerlust."
                            }
                        ]
                }
        },
        {
            prompt_text: "Eiszapfen",
            date: "27.01",
            detail_text: "Eiszapfen sind natürliche Erscheinungen, die sich an Dächern, Wänden und anderen Oberflächen bei tiefen Temperaturen bilden. Sie entstehen durch das Gefrieren von Regen- oder Schmelzwasser, das an diesen Oberflächen herunterläuft. Eiszapfen können in verschiedenen Größen und Formen vorkommen und können sowohl natürlich als auch künstlich sein. Ein Fotograf kann die Schönheit und die faszinierenden Muster von Eiszapfen einfangen, indem er sie in verschiedenen Umgebungen und Szenarien zeigt.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Eiszapfen-Kunst",
                            "description": "Ein Foto von Eiszapfen, die in einer kreativen und künstlerischen Weise arrangiert wurden, z.B. als eine Skulptur oder als Teil einer Installation. Es zeigt die Schönheit und die kreative Möglichkeiten von Eiszapfen."
                        }, {
                            "title": "Eiszapfen in der Natur",
                            "description": "Ein Foto von Eiszapfen, die an der Wand oder am Dach eines Gebäudes oder an Bäumen in der Wildnis entstanden sind. Es zeigt die natürliche Schönheit und die beeindruckende Kraft von Eiszapfen."
                        }, {
                            "title": "Eiszapfen im Licht",
                            "description": "Ein Foto von Eiszapfen, die bei verschiedenen Lichtverhältnissen fotografiert wurden, z.B. bei Sonnenauf- oder -untergang oder bei Nacht mit künstlichem Licht. Es zeigt die Wirkung des Lichts auf die Schönheit und die Farben von Eiszapfen."
                        }]

                }
        },
        {
            prompt_text: "Kuscheln / Kuschelig",
            date: "28.01",
            detail_text: "etwas, das man gerne umarmt oder anfasst. Es kann sich auf einen Ort, einen Gegenstand oder eine Person beziehen. Ein Fotograf kann die Schönheit und die Emotionen, die mit Kuscheligkeit verbunden sind, einfangen, indem er sie in verschiedenen Umgebungen und Szenarien zeigt.",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Ein gemütliches Zuhause",
                            "description": "Ein Foto von einem gemütlichen Wohnzimmer, vielleicht mit einem Kamin, bequemen Möbeln und warmen Textilien. Es zeigt die Schönheit eines Ortes, an dem man sich geborgen und willkommen fühlt."
                        }, {
                            "title": "Ein Plüschtier",
                            "description": "Ein Foto von einem Plüschtier oder einem anderen weichen Gegenstand, der vermittelt, dass man ihn gerne umarmen würde. Es zeigt die Emotionen die mit Kuscheligkeit assoziiert sind und die Freude die man damit verbindet."
                        }, {
                            "title": "Ein schlafender Hund oder Katze",
                            "description": "Ein Foto von einem schlafenden Hund oder einer Katze, die einen kuscheligen und friedlichen Eindruck vermittelt. Es zeigt die Schönheit und den Frieden die mit dem Wohlbehagen von Tieren und ihrer Nähe verbunden sind."
                        }]
                }
        },
        {
            prompt_text: "Schneeman",
            date: "29.01",
            detail_text: "Ein Schneemann ist eine künstliche Figur, die aus Schnee gebaut wird, meistens in der Form eines Menschen, jedoch nicht unbedingt, und häufig verziert mit verschiedenen Accessoires wie Hut, Schal und Knöpfe. Sie sind oft in den Wintermonaten zu sehen und sind ein beliebter Bestandteil von Winterdekorationen. Ein Fotograf kann die Schönheit und die Emotionen eines Schneemanns einfangen, indem er ihn in verschiedenen Umgebungen und Szenarien zeigt. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Kunstvoll gebaute Schneemann",
                            "description": "Ein Foto eines besonders detailliert und kunstvoll gebauten Schneemann, mit vielen verschiedenen Accessoires und Verzierungen. Es zeigt die Kreativität und die Freude, die in das Bauen von Schneemännern steckt."
                        }, {
                            "title": "Schneemann in der Natur",
                            "description": "Ein Foto eines Schneemanns, der in der natürlichen Umgebung aufgestellt wurde, beispielsweise im Wald oder auf einer Wiese. Es zeigt die Schönheit und die Harmonie zwischen Natur und Kunst. "
                        }, {
                            "title": "Ein Gruppe von Schneemännern",
                            "description": "Ein Foto von einer Gruppe von Schneemännern die unterschiedliche Größen, Formen und Accessoires haben. Es zeigt die Vielfalt und die Freude die im Aufstellen von Schneemännern steckt."
                        }]
                }
        },
        {
            prompt_text: "Gemütliches Licht",
            date: "30.01",
            detail_text: "\"Gemütliches Licht\" bezieht sich auf eine Art von Beleuchtung, die warm, beruhigend und einladend ist. Es kann sich auf natürliches Licht, wie das Licht einer untergehenden Sonne, oder künstliches Licht, wie das Licht von Kerzen oder Lampen, beziehen. Ein Fotograf kann die Schönheit und die Emotionen, die mit gemütlichem Licht verbunden sind, einfangen, indem er es in verschiedenen Umgebungen und Szenarien zeigt. ",
            example_images:
                {
                    prompt_helper:
                        [{
                            "title": "Gemütliches Zuhause",
                            "description": "Ein Foto eines gemütlichen Wohnzimmers oder eines anderen Innenraums, beleuchtet von warmem, sanftem Licht. Es zeigt die Schönheit und die Geborgenheit eines Ortes, an dem man sich wohl fühlt."
                        },
                            {
                                "title": "Romantische Stimmung",
                                "description": "Ein Foto von einem romantischen Abendessen bei Kerzenlicht oder einem anderen sinnlichen Szenario, bei dem das Licht eine wichtige Rolle spielt. Es zeigt die Schönheit und die Emotionen, die mit romantischen Momenten verbunden sind."
                            },]
                }
        },
        {
            prompt_text: "Räucherstäbchen",
            date: "31.01",
            detail_text: "Räucherstäbchen sind kleine Röhren oder Stäbe, die in der Regel aus Bambus oder Papier gefertigt sind und die beim Verbrennen aromatische Gewürze oder Kräuter freisetzen. Sie werden in verschiedenen Kulturen und Religionen verwendet, um eine spirituelle oder entspannende Atmosphäre zu schaffen. Ein Fotograf kann die Schönheit und die Emotionen von Räucherstäbchen einfangen, indem er sie in verschiedenen Umgebungen und Szenarien zeigt.",
            example_images:
                {
                    prompt_helper:
                        [
                            {
                                "title": "Ein Räucherstäbchen in einer Hand",
                                "description": "Ein Foto einer Person, die ein Räucherstäbchen in der Hand hält, zeigt die Schönheit und die Bedeutung der Traditionen die mit Räucherstäbchen assoziiert sind."
                            },
                            {
                                "title": "Räucherstäbchen vor einem Altar",
                                "description": "Ein Foto von Räucherstäbchen die vor einem spirituellen Altar aufgestellt sind, veranschaulicht die Rolle die Räucherstäbchen in spirituellen Praktiken haben"
                            },
                            {
                                "title": "Eine Gruppe von Räucherstäbchen",
                                "description": "Ein Foto, das eine Gruppe von Räucherstäbchen die in verschiedenen Farben, Größen und Duftrichtungen sind zeigt. Es zeigt die Vielfalt und die Schönheit der Räucherstäbchen."
                            }
                            ,]
                }
        },
        {
            prompt_text: "Doppelbelichtung",
            date: "01.02",
            detail_text: "",
        },
        {
            prompt_text: "Innenbereich",
            date: "02.02",
            detail_text: "",
        },
        {
            prompt_text: "Schlaf",
            date: "03.02",
            detail_text: "",
        },
        {
            prompt_text: "Guilty Pleasure",
            date: "04.02",
            detail_text: "",
        },
        {
            prompt_text: "Morgenhimmel",
            date: "05.02",
            detail_text: "",
        },
        {
            prompt_text: "Süßigkeiten / Bonbon",
            date: "06.02",
            detail_text: "",
        },
        {
            prompt_text: "Schleife/ Ribbon",
            date: "07.02",
            detail_text: "",
        },
        {
            prompt_text: "Spiegel Foto",
            date: "08.02",
            detail_text: "",
        },
        {
            prompt_text: "Blütenblätter",
            date: "09.02",
            detail_text: "",
        },
        {
            prompt_text: "Etwas Pinkes",
            date: "10.02",
            detail_text: "",
        },
        {
            prompt_text: "Hand in Hand",
            date: "11.02",
            detail_text: "",
        },
        {
            prompt_text: "Augen",
            date: "12.02",
            detail_text: "",
        },
        {
            prompt_text: "Etwas, dass du vor kurzem gekauf hast",
            date: "13.02",
            detail_text: "",
        },
        {
            prompt_text: "Paare",
            date: "14.02",
            detail_text: "",
        },
        {
            prompt_text: "Frostig / Eisig",
            date: "15.02",
            detail_text: "",
        },
        {
            prompt_text: "Schokolade",
            date: "16.02",
            detail_text: "",
        },
        {
            prompt_text: "Kollage",
            date: "17.02",
            detail_text: "",
        },
        {
            prompt_text: "Streuung / Verteilung von Licht",
            date: "18.02",
            detail_text: "",
        },
        {
            prompt_text: "Etwas, dass du an dir selber liebst",
            date: "19.02",
            detail_text: "",
        },
        {
            prompt_text: "Kuss",
            date: "20.02",
            detail_text: "",
        },
        {
            prompt_text: "Liebesbrief",
            date: "21.02",
            detail_text: "",
        },
        {
            prompt_text: "Deine Familie",
            date: "22.02",
            detail_text: "",
        },
        {
            prompt_text: "Date Night",
            date: "23.02",
            detail_text: "",
        },
        {
            prompt_text: "Einsamkeit",
            date: "24.02",
            detail_text: "",
        },
        {
            prompt_text: "Zuneigung",
            date: "25.02",
            detail_text: "",
        },
        {
            prompt_text: "Bewegung",
            date: "26.02",
            detail_text: "",
        },
        {
            prompt_text: "Türöffnung / Eingang",
            date: "27.02",
            detail_text: "",
        },
        {
            prompt_text: "6 Unr Abends",
            date: "28.02",
            detail_text: "",
        },
        {
            prompt_text: "Pastellfarben",
            date: "01.03",
            detail_text: "",
        },
        {
            prompt_text: "Wiederholung",
            date: "02.03",
            detail_text: "",
        },
        {
            prompt_text: "Abstrakt",
            date: "03.03",
            detail_text: "",
        },
        {
            prompt_text: "Träume",
            date: "04.03",
            detail_text: "",
        },
        {
            prompt_text: "Wirbel",
            date: "05.03",
            detail_text: "",
        },
        {
            prompt_text: "Von oben",
            date: "06.03",
            detail_text: "",
        },
        {
            prompt_text: "Nahaufnahme",
            date: "07.03",
            detail_text: "",
        },
        {
            prompt_text: "Niedriger Winkel",
            date: "08.03",
            detail_text: "",
        },
        {
            prompt_text: "Deine lieblings Farbe",
            date: "09.03",
            detail_text: "",
        },
        {
            prompt_text: "Frisch",
            date: "10.03",
            detail_text: "",
        },
        {
            prompt_text: "Städtisch / Urban",
            date: "11.03",
            detail_text: "",
        },
        {
            prompt_text: "Stilleben",
            date: "12.03",
            detail_text: "",
        },
        {
            prompt_text: "Meine Stadt",
            date: "13.03",
            detail_text: "",
        },
        {
            prompt_text: "Mit einem Stativ",
            date: "14.03",
            detail_text: "",
        },
        {
            prompt_text: "Natur",
            date: "15.03",
            detail_text: "",
        },
        {
            prompt_text: "Vintage",
            date: "16.03",
            detail_text: "",
        },
        {
            prompt_text: "Dokumentarfilm",
            date: "17.03",
            detail_text: "",
        },
        {
            prompt_text: "Tinte",
            date: "18.03",
            detail_text: "",
        },
        {
            prompt_text: "Scharf",
            date: "19.03",
            detail_text: "",
        },
        {
            prompt_text: "Blitz",
            date: "20.03",
            detail_text: "",
        },
        {
            prompt_text: "Schmelzender Schnee",
            date: "21.03",
            detail_text: "",
        },
        {
            prompt_text: "Flauschig",
            date: "22.03",
            detail_text: "",
        },
        {
            prompt_text: "Cosplay",
            date: "23.03",
            detail_text: "",
        },
        {
            prompt_text: "Zoom in",
            date: "24.03",
            detail_text: "",
        },
        {
            prompt_text: "Kindheitserinnerung",
            date: "25.03",
            detail_text: "",
        },
        {
            prompt_text: "Führende Linien",
            date: "26.03",
            detail_text: "",
        },
        {
            prompt_text: "Rule of thirds",
            date: "27.03",
            detail_text: "",
        },
        {
            prompt_text: "Dreieck",
            date: "28.03",
            detail_text: "",
        },
        {
            prompt_text: "Studio",
            date: "29.03",
            detail_text: "",
        },
        {
            prompt_text: "Nachtleben",
            date: "30.03",
            detail_text: "",
        },
        {
            prompt_text: "Hässlicher Ort",
            date: "31.03",
            detail_text: "",
        },
        {
            prompt_text: "Glücksfall",
            date: "01.04",
            detail_text: "",
        },
        {
            prompt_text: "Spaziergang",
            date: "02.04",
            detail_text: "",
        },
        {
            prompt_text: "Lieblingszeit am Tag",
            date: "03.04",
            detail_text: "",
        },
        {
            prompt_text: "Spiele",
            date: "04.04",
            detail_text: "",
        },
        {
            prompt_text: "Sprießende Blumen",
            date: "05.04",
            detail_text: "",
        },
        {
            prompt_text: "Das Objekt neben dir",
            date: "06.04",
            detail_text: "",
        },
        {
            prompt_text: "Gesichtslos",
            date: "07.04",
            detail_text: "",
        },
        {
            prompt_text: "Farbenfroh",
            date: "08.04",
            detail_text: "",
        },
        {
            prompt_text: "HRD",
            date: "09.04",
            detail_text: "",
        },
        {
            prompt_text: "Color-blocking",
            date: "10.04",
            detail_text: "",
        },
        {
            prompt_text: "Kein Filter",
            date: "11.04",
            detail_text: "",
        },
        {
            prompt_text: "Negativer Raum",
            date: "12.04",
            detail_text: "",
        },
        {
            prompt_text: "11:11 Vormittag",
            date: "13.04",
            detail_text: "",
        },
        {
            prompt_text: "Wind",
            date: "14.04",
            detail_text: "",
        },
        {
            prompt_text: "Schwebezustand",
            date: "15.04",
            detail_text: "",
        },
        {
            prompt_text: "G steht für",
            date: "16.04",
            detail_text: "",
        },
        {
            prompt_text: "Hell / Leuchtend",
            date: "17.04",
            detail_text: "",
        },
        {
            prompt_text: "Ostereier Dekoration",
            date: "18.04",
            detail_text: "",
        },
        {
            prompt_text: "Motion Blur",
            date: "19.04",
            detail_text: "",
        },
        {
            prompt_text: "Schlammiger Fußabdruck",
            date: "20.04",
            detail_text: "",
        },
        {
            prompt_text: "Regenbogen",
            date: "21.04",
            detail_text: "",
        },
        {
            prompt_text: "Narzissen",
            date: "22.04",
            detail_text: "",
        },
        {
            prompt_text: "Saatgut einpflanzen",
            date: "23.04",
            detail_text: "",
        },
        {
            prompt_text: "Natürlich",
            date: "24.04",
            detail_text: "",
        },
        {
            prompt_text: "Weit entfernt",
            date: "25.04",
            detail_text: "",
        },
        {
            prompt_text: "Dein Abend",
            date: "26.04",
            detail_text: "",
        },
        {
            prompt_text: "Entspannung",
            date: "27.04",
            detail_text: "",
        },
        {
            prompt_text: "Nackt",
            date: "28.04",
            detail_text: "",
        },
        {
            prompt_text: "Kucken",
            date: "29.04",
            detail_text: "",
        },
        {
            prompt_text: "Bienen",
            date: "30.04",
            detail_text: "",
        },
        {
            prompt_text: "Aktuelle Stimmung",
            date: "01.05",
            detail_text: "",
        },
        {
            prompt_text: "Am meisten geschätzter Gegenstand",
            date: "02.05",
            detail_text: "",
        },
        {
            prompt_text: "Emotionen",
            date: "03.05",
            detail_text: "",
        },
        {
            prompt_text: "Grass",
            date: "04.05",
            detail_text: "",
        },
        {
            prompt_text: "Mond",
            date: "05.05",
            detail_text: "",
        },
        {
            prompt_text: "Vogel",
            date: "06.05",
            detail_text: "",
        },
        {
            prompt_text: "Blaue Stunde",
            date: "07.05",
            detail_text: "",
        },
        {
            prompt_text: "Goldene Stunde",
            date: "08.05",
            detail_text: "",
        },
        {
            prompt_text: "Macro",
            date: "09.05",
            detail_text: "",
        },
        {
            prompt_text: "Sterne",
            date: "10.05",
            detail_text: "",
        },
        {
            prompt_text: "W steht für",
            date: "10.05",
            detail_text: "",
        },
        {
            prompt_text: "Rain",
            date: "11.05",
            detail_text: "",
        },
        {
            prompt_text: "In meinem Kopf",
            date: "12.05",
            detail_text: "",
        },
        {
            prompt_text: "Fahrrad",
            date: "13.05",
            detail_text: "",
        },
        {
            prompt_text: "Erde",
            date: "14.05",
            detail_text: "",
        },
        {
            prompt_text: "Yoga",
            date: "15.05",
            detail_text: "",
        },
        {
            prompt_text: "Zubehör",
            date: "16.05",
            detail_text: "",
        },
        {
            prompt_text: "Wandern",
            date: "17.05",
            detail_text: "",
        },
        {
            prompt_text: "Barfuß",
            date: "18.05",
            detail_text: "",
        },
        {
            prompt_text: "Horizont",
            date: "19.05",
            detail_text: "",
        },
        {
            prompt_text: "Blumenkronen",
            date: "20.05",
            detail_text: "",
        },
        {
            prompt_text: "Puzzel",
            date: "21.05",
            detail_text: "",
        },
        {
            prompt_text: "Unauffällig",
            date: "22.05",
            detail_text: "",
        },
        {
            prompt_text: "Kontrast",
            date: "23.05",
            detail_text: "",
        },
        {
            prompt_text: "Musik",
            date: "24.05",
            detail_text: "",
        },
        {
            prompt_text: "Cinemagraph",
            date: "25.05",
            detail_text: "",
        },
        {
            prompt_text: "Foto mit einem Handy",
            date: "26.05",
            detail_text: "",
        },
        {
            prompt_text: "Wegwerfkamera",
            date: "27.05",
            detail_text: "",
        },
        {
            prompt_text: "Geld",
            date: "28.05",
            detail_text: "",
        },
        {
            prompt_text: "Post",
            date: "29.05",
            detail_text: "",
        },
        {
            prompt_text: "Sonne",
            date: "30.05",
            detail_text: "",
        },
        {
            prompt_text: "Handtuch",
            date: "31.05",
            detail_text: "",
        },
        {
            prompt_text: "Tanzen",
            date: "01.06",
            detail_text: "",
        },
        {
            prompt_text: "Streulicht",
            date: "02.06",
            detail_text: "",
        },
        {
            prompt_text: "Blasen",
            date: "03.06",
            detail_text: "",
        },
        {
            prompt_text: "Feuerwerk",
            date: "04.06",
            detail_text: "",
        },
        {
            prompt_text: "Graffiti",
            date: "05.06",
            detail_text: "",
        },
        {
            prompt_text: "Hausdächer",
            date: "06.06",
            detail_text: "",
        },
        {
            prompt_text: "Sonnenbrille",
            date: "07.06",
            detail_text: "",
        },
        {
            prompt_text: "Picknick",
            date: "08.06",
            detail_text: "",
        },
        {
            prompt_text: "Sonnenuntergang",
            date: "09.06",
            detail_text: "",
        },
        {
            prompt_text: "Lange Belichtungszeit",
            date: "10.06",
            detail_text: "",
        },
        {
            prompt_text: "Sport",
            date: "11.06",
            detail_text: "",
        },
        {
            prompt_text: "Umarmung",
            date: "12.06",
            detail_text: "",
        },
        {
            prompt_text: "Lächeln",
            date: "13.06",
            detail_text: "",
        },
        {
            prompt_text: "Springen",
            date: "14.06",
            detail_text: "",
        },
        {
            prompt_text: "Ein völlig Fremder",
            date: "15.06",
            detail_text: "",
        },
        {
            prompt_text: "Rauch",
            date: "16.06",
            detail_text: "",
        },
        {
            prompt_text: "Ein Bild im Bild",
            date: "17.06",
            detail_text: "",
        },
        {
            prompt_text: "Erzwungene Perspektive",
            date: "18.06",
            detail_text: "",
        },
        {
            prompt_text: "Lichtmalerei",
            date: "19.06",
            detail_text: "",
        },
        {
            prompt_text: "Hergestellt aus Holz",
            date: "20.06",
            detail_text: "",
        },
        {
            prompt_text: "Panorama",
            date: "21.06",
            detail_text: "",
        },
        {
            prompt_text: "Nacht",
            date: "22.06",
            detail_text: "",
        },
        {
            prompt_text: "Hände",
            date: "23.06",
            detail_text: "",
        },
        {
            prompt_text: "Fahrzeug",
            date: "24.06",
            detail_text: "",
        },
        {
            prompt_text: "Frisches Obst",
            date: "25.06",
            detail_text: "",
        },
        {
            prompt_text: "Glitzer",
            date: "26.06",
            detail_text: "",
        },
        {
            prompt_text: "Haustiere",
            date: "27.06",
            detail_text: "",
        },
        {
            prompt_text: "Aus der Ferne",
            date: "28.06",
            detail_text: "",
        },
        {
            prompt_text: "Schmetterling",
            date: "29.06",
            detail_text: "",
        },
        {
            prompt_text: "Upsidedown",
            date: "30.06",
            detail_text: "",
        },
        {
            prompt_text: "Wolkenkratzer",
            date: "01.07",
            detail_text: "",
        },
        {
            prompt_text: "Polka Dots",
            date: "02.07",
            detail_text: "",
        },
        {
            prompt_text: "Wassermelone",
            date: "03.07",
            detail_text: "",
        },
        {
            prompt_text: "Feuerstelle",
            date: "04.07",
            detail_text: "",
        },
        {
            prompt_text: "Wasser",
            date: "05.07",
            detail_text: "",
        },
        {
            prompt_text: "Vogelperspektive",
            date: "06.07",
            detail_text: "",
        },
        {
            prompt_text: "Verwenden mal ein anderes Objektiv",
            date: "07.07",
            detail_text: "",
        },
        {
            prompt_text: "Brunnen",
            date: "08.07",
            detail_text: "",
        },
        {
            prompt_text: "Wildtiere",
            date: "09.07",
            detail_text: "",
        },
        {
            prompt_text: "1. Person, die du gesehen hast",
            date: "10.07",
            detail_text: "",
        },
        {
            prompt_text: "Etwas gelbes",
            date: "11.07",
            detail_text: "",
        },
        {
            prompt_text: "Luftballons",
            date: "12.07",
            detail_text: "",
        },
        {
            prompt_text: "Tattoo",
            date: "13.07",
            detail_text: "",
        },
        {
            prompt_text: "Etwas durchsichtiges",
            date: "14.07",
            detail_text: "",
        },
        {
            prompt_text: "Federn",
            date: "15.07",
            detail_text: "",
        },
        {
            prompt_text: "Neon",
            date: "16.07",
            detail_text: "",
        },
        {
            prompt_text: "Reflexionen",
            date: "17.07",
            detail_text: "",
        },
        {
            prompt_text: "Silhouette",
            date: "18.07",
            detail_text: "",
        },
        {
            prompt_text: "Gebrochen / Zerbrochen",
            date: "19.07",
            detail_text: "",
        },
        {
            prompt_text: "Eis",
            date: "20.07",
            detail_text: "",
        },
        {
            prompt_text: "Symmetrie",
            date: "21.07",
            detail_text: "",
        },
        {
            prompt_text: "Straßenfotografie",
            date: "22.07",
            detail_text: "",
        },
        {
            prompt_text: "Etwas, dass dich zum Lächeln bringt",
            date: "23.07",
            detail_text: "",
        },
        {
            prompt_text: "Der Blick aus deinem Fenster",
            date: "24.07",
            detail_text: "",
        },
        {
            prompt_text: "Ein altes Foto nachstellen",
            date: "25.07",
            detail_text: "",
        },
        {
            prompt_text: "Outfit des Tages",
            date: "26.07",
            detail_text: "",
        },
        {
            prompt_text: "Regen",
            date: "27.07",
            detail_text: "",
        },
        {
            prompt_text: "Zerbrechlich",
            date: "28.07",
            detail_text: "",
        },
        {
            prompt_text: "Gegensätze",
            date: "29.07",
            detail_text: "",
        },
        {
            prompt_text: "Lips",
            date: "30.07",
            detail_text: "",
        },
        {
            prompt_text: "Treppen",
            date: "31.07",
            detail_text: "",
        },
        {
            prompt_text: "Porträt mit Gegenlicht",
            date: "01.08",
            detail_text: "",
        },
        {
            prompt_text: "Ein anderer Fotograf",
            date: "02.08",
            detail_text: "",
        },
        {
            prompt_text: "Technologie",
            date: "03.08",
            detail_text: "",
        },
        {
            prompt_text: "Etwas rotes",
            date: "04.08",
            detail_text: "",
        },
        {
            prompt_text: "Himmel",
            date: "05.08",
            detail_text: "",
        },
        {
            prompt_text: "Ring",
            date: "06.08",
            detail_text: "",
        },
        {
            prompt_text: "Auf dem Boden",
            date: "07.08",
            detail_text: "",
        },
        {
            prompt_text: "Riesenrad",
            date: "08.08",
            detail_text: "",
        },
        {
            prompt_text: "Wasserfall",
            date: "09.08",
            detail_text: "",
        },
        {
            prompt_text: "Haare",
            date: "10.08",
            detail_text: "",
        },
        {
            prompt_text: "Im Kühlschrank",
            date: "11.08",
            detail_text: "",
        },
        {
            prompt_text: "Ein Modefoto",
            date: "12.08",
            detail_text: "",
        },
        {
            prompt_text: "Blitzschlag / Gewitter",
            date: "13.08",
            detail_text: "",
        },
        {
            prompt_text: "Schwimmen",
            date: "14.08",
            detail_text: "",
        },
        {
            prompt_text: "freelensing Porträt",
            date: "15.08",
            detail_text: "",
        },
        {
            prompt_text: "Pferde",
            date: "16.08",
            detail_text: "",
        },
        {
            prompt_text: "Bunte Wassertropfen",
            date: "17.08",
            detail_text: "",
        },
        {
            prompt_text: "Unter der Seebrücke / Pier / Mole",
            date: "18.08",
            detail_text: "",
        },
        {
            prompt_text: "Laternenfest",
            date: "19.08",
            detail_text: "",
        },
        {
            prompt_text: "Infrarot-Fotografie",
            date: "20.08",
            detail_text: "",
        },
        {
            prompt_text: "Neblige Landschaft",
            date: "21.08",
            detail_text: "",
        },
        {
            prompt_text: "Quadratisch",
            date: "22.08",
            detail_text: "",
        },
        {
            prompt_text: "Kinder",
            date: "23.08",
            detail_text: "",
        },
        {
            prompt_text: "Details",
            date: "24.08",
            detail_text: "",
        },
        {
            prompt_text: "Konzert",
            date: "25.08",
            detail_text: "",
        },
        {
            prompt_text: "Natürliches Licht",
            date: "26.08",
            detail_text: "",
        },
        {
            prompt_text: "Mit Schatten spielen",
            date: "27.08",
            detail_text: "",
        },
        {
            prompt_text: "A steht für",
            date: "28.08",
            detail_text: "",
        },
        {
            prompt_text: "Surreal",
            date: "29.08",
            detail_text: "",
        },
        {
            prompt_text: "Tägliche Gewohnheit",
            date: "30.08",
            detail_text: "",
        },
        {
            prompt_text: "Kirschen",
            date: "31.08",
            detail_text: "",
        },
        {
            prompt_text: "Minimalismus",
            date: "01.09",
            detail_text: "",
        },
        {
            prompt_text: "Dein Hobby",
            date: "02.09",
            detail_text: "",
        },
        {
            prompt_text: "15.00 Uhr",
            date: "03.09",
            detail_text: "",
        },
        {
            prompt_text: "Manueller Fokus",
            date: "04.09",
            detail_text: "",
        },
        {
            prompt_text: "Einen Song interpretieren",
            date: "05.09",
            detail_text: "",
        },
        {
            prompt_text: "Mit einer Requisite",
            date: "06.09",
            detail_text: "",
        },
        {
            prompt_text: "Beste Freunde",
            date: "07.09",
            detail_text: "",
        },
        {
            prompt_text: "Schaukel",
            date: "08.09",
            detail_text: "",
        },
        {
            prompt_text: "Muster",
            date: "09.09",
            detail_text: "",
        },
        {
            prompt_text: "Ein Geruch, den du magst",
            date: "10.09",
            detail_text: "",
        },
        {
            prompt_text: "Funkeln",
            date: "11.09",
            detail_text: "",
        },
        {
            prompt_text: "Architektur",
            date: "12.09",
            detail_text: "",
        },
        {
            prompt_text: "Vorher und nachher",
            date: "13.09",
            detail_text: "",
        },
        {
            prompt_text: "Straßenschild",
            date: "14.09",
            detail_text: "",
        },
        {
            prompt_text: "Dein Arbeitsplatz",
            date: "15.09",
            detail_text: "",
        },
        {
            prompt_text: "Das Wetter",
            date: "16.09",
            detail_text: "",
        },
        {
            prompt_text: "Früh Morgens",
            date: "17.09",
            detail_text: "",
        },
        {
            prompt_text: "Garten",
            date: "18.09",
            detail_text: "",
        },
        {
            prompt_text: "Unerwartet",
            date: "19.09",
            detail_text: "",
        },
        {
            prompt_text: "L steht für",
            date: "20.09",
            detail_text: "",
        },
        {
            prompt_text: "Ernte",
            date: "21.09",
            detail_text: "",
        },
        {
            prompt_text: "Blätter",
            date: "22.09",
            detail_text: "",
        },
        {
            prompt_text: "Mosaik",
            date: "23.09",
            detail_text: "",
        },
        {
            prompt_text: "Skulpturen",
            date: "24.09",
            detail_text: "",
        },
        {
            prompt_text: "Sepia",
            date: "25.09",
            detail_text: "",
        },
        {
            prompt_text: "Parallele Linien",
            date: "26.09",
            detail_text: "",
        },
        {
            prompt_text: "Falten",
            date: "27.09",
            detail_text: "",
        },
        {
            prompt_text: "Deine Schuhe",
            date: "28.09",
            detail_text: "",
        },
        {
            prompt_text: "Eine schlechte Angewohnheit",
            date: "29.09",
            detail_text: "",
        },
        {
            prompt_text: "Etwas leckeres",
            date: "30.09",
            detail_text: "",
        },
        {
            prompt_text: "Dunkel und launisch",
            date: "01.10",
            detail_text: "",
        },
        {
            prompt_text: "Wovor du dich fürchten",
            date: "02.10",
            detail_text: "",
        },
        {
            prompt_text: "Pfütze",
            date: "03.10",
            detail_text: "",
        },
        {
            prompt_text: "Gold",
            date: "04.10",
            detail_text: "",
        },
        {
            prompt_text: "Kunst",
            date: "05.10",
            detail_text: "",
        },
        {
            prompt_text: "Deine Stadt",
            date: "06.10",
            detail_text: "",
        },
        {
            prompt_text: "Schnitt / Scheibe",
            date: "07.10",
            detail_text: "",
        },
        {
            prompt_text: "Einfach",
            date: "08.10",
            detail_text: "",
        },
        {
            prompt_text: "Ein Vogelschwarm",
            date: "09.10",
            detail_text: "",
        },
        {
            prompt_text: "Metal",
            date: "10.10",
            detail_text: "",
        },
        {
            prompt_text: "Herbstliches Flat Lay",
            date: "11.10",
            detail_text: "",
        },
        {
            prompt_text: "Brücke",
            date: "12.10",
            detail_text: "",
        },
        {
            prompt_text: "fließendes Wasser",
            date: "13.10",
            detail_text: "",
        },
        {
            prompt_text: "Etwas braunes",
            date: "14.10",
            detail_text: "",
        },
        {
            prompt_text: "Unter etwas anderem drunter",
            date: "15.10",
            detail_text: "",
        },
        {
            prompt_text: "Road Trip",
            date: "16.10",
            detail_text: "",
        },
        {
            prompt_text: "Auf dem Boden liegende Blätter",
            date: "17.10",
            detail_text: "",
        },
        {
            prompt_text: "Kuchen",
            date: "18.10",
            detail_text: "",
        },
        {
            prompt_text: "Pfad",
            date: "19.10",
            detail_text: "",
        },
        {
            prompt_text: "Steine",
            date: "20.10",
            detail_text: "",
        },
        {
            prompt_text: "Straßenlaternen",
            date: "21.10",
            detail_text: "",
        },
        {
            prompt_text: "Jeansstoff",
            date: "22.10",
            detail_text: "",
        },
        {
            prompt_text: "Bauernmarkt",
            date: "23.10",
            detail_text: "",
        },
        {
            prompt_text: "Verlassen / Lost Place",
            date: "24.10",
            detail_text: "",
        },
        {
            prompt_text: "Flüssigkeit",
            date: "25.10",
            detail_text: "",
        },
        {
            prompt_text: "Zaun",
            date: "26.10",
            detail_text: "",
        },
        {
            prompt_text: "Spinnennetz",
            date: "27.10",
            detail_text: "",
        },
        {
            prompt_text: "Gespenstisch",
            date: "28.10",
            detail_text: "",
        },
        {
            prompt_text: "B steht für",
            date: "29.10",
            detail_text: "",
        },
        {
            prompt_text: "Kürbis",
            date: "30.10",
            detail_text: "",
        },
        {
            prompt_text: "Friedhof",
            date: "31.10",
            detail_text: "",
        },
        {
            prompt_text: "In einem Auto",
            date: "01.11",
            detail_text: "",
        },
        {
            prompt_text: "N steht für",
            date: "02.11",
            detail_text: "",
        },
        {
            prompt_text: "Einkaufen",
            date: "03.11",
            detail_text: "",
        },
        {
            prompt_text: "Tor / Pforte",
            date: "04.11",
            detail_text: "",
        },
        {
            prompt_text: "Wald",
            date: "05.11",
            detail_text: "",
        },
        {
            prompt_text: "Rustikal",
            date: "06.11",
            detail_text: "",
        },
        {
            prompt_text: "M steht für",
            date: "07.11",
            detail_text: "",
        },
        {
            prompt_text: "Zimt",
            date: "08.11",
            detail_text: "",
        },
        {
            prompt_text: "Handgefertigt",
            date: "09.11",
            detail_text: "",
        },
        {
            prompt_text: "Münzen",
            date: "10.11",
            detail_text: "",
        },
        {
            prompt_text: "Pilz",
            date: "11.11",
            detail_text: "",
        },
        {
            prompt_text: "Baum",
            date: "12.11",
            detail_text: "",
        },
        {
            prompt_text: "Schlösser",
            date: "13.11",
            detail_text: "",
        },
        {
            prompt_text: "Flasche",
            date: "14.11",
            detail_text: "",
        },
        {
            prompt_text: "Sammlung",
            date: "15.11",
            detail_text: "",
        },
        {
            prompt_text: "Teller",
            date: "16.11",
            detail_text: "",
        },
        {
            prompt_text: "Inspiriert durch einen Film",
            date: "17.11",
            detail_text: "",
        },
        {
            prompt_text: "Künstliches Licht",
            date: "18.11",
            detail_text: "",
        },
        {
            prompt_text: "Unedited / Edited",
            date: "19.11",
            detail_text: "",
        },
        {
            prompt_text: "Abenteuer",
            date: "20.11",
            detail_text: "",
        },
        {
            prompt_text: "Abendliches Ritual",
            date: "21.11",
            detail_text: "",
        },
        {
            prompt_text: "Schwarzweiß",
            date: "22.11",
            detail_text: "",
        },
        {
            prompt_text: "In einer Reihe",
            date: "23.11",
            detail_text: "",
        },
        {
            prompt_text: "Unvollkommen / Unvollständig",
            date: "24.11",
            detail_text: "",
        },
        {
            prompt_text: "Bodennähe",
            date: "25.11",
            detail_text: "",
        },
        {
            prompt_text: "Gemüse",
            date: "26.11",
            detail_text: "",
        },
        {
            prompt_text: "Bögen",
            date: "27.11",
            detail_text: "",
        },
        {
            prompt_text: "Nudeln",
            date: "28.11",
            detail_text: "",
        },
        {
            prompt_text: "Ein bedeutsamer Ort",
            date: "29.11",
            detail_text: "",
        },
        {
            prompt_text: "Kirche",
            date: "30.11",
            detail_text: "",
        },
        {
            prompt_text: "Frühstück",
            date: "01.12",
            detail_text: "",
        },
        {
            prompt_text: "Schichten / Ebenen",
            date: "02.12",
            detail_text: "",
        },
        {
            prompt_text: "D steht für",
            date: "03.12",
            detail_text: "",
        },
        {
            prompt_text: "Socken",
            date: "04.12",
            detail_text: "",
        },
        {
            prompt_text: "Kamin / Feuerstelle",
            date: "05.12",
            detail_text: "",
        },
        {
            prompt_text: "Etwas grünes",
            date: "06.12",
            detail_text: "",
        },
        {
            prompt_text: "Monochrome",
            date: "07.12",
            detail_text: "",
        },
        {
            prompt_text: "Im Bett",
            date: "08.12",
            detail_text: "",
        },
        {
            prompt_text: "Ornamente / Verzierungen",
            date: "09.12",
            detail_text: "",
        },
        {
            prompt_text: "Kekse",
            date: "10.12",
            detail_text: "",
        },
        {
            prompt_text: "Work in progress",
            date: "11.12",
            detail_text: "",
        },
        {
            prompt_text: "Pullover",
            date: "12.12",
            detail_text: "",
        },
        {
            prompt_text: "Weihnachtsbeleuchtung im Freien",
            date: "13.12",
            detail_text: "",
        },
        {
            prompt_text: "Weihnachtsbaum",
            date: "14.12",
            detail_text: "",
        },
        {
            prompt_text: "Kerzen",
            date: "15.12",
            detail_text: "",
        },
        {
            prompt_text: "Zuckerstange",
            date: "16.12",
            detail_text: "",
        },
        {
            prompt_text: "Winter",
            date: "17.12",
            detail_text: "",
        },
        {
            prompt_text: "Geschenkpapier",
            date: "18.12",
            detail_text: "",
        },
        {
            prompt_text: "Heiße Schokolade",
            date: "19.12",
            detail_text: "",
        },
        {
            prompt_text: "Backen",
            date: "20.12",
            detail_text: "",
        },
        {
            prompt_text: "Geschenke",
            date: "21.12",
            detail_text: "",
        },
        {
            prompt_text: "Flamme",
            date: "22.12",
            detail_text: "",
        },
        {
            prompt_text: "Nadelbaum",
            date: "23.12",
            detail_text: "",
        },
        {
            prompt_text: "Bokeh",
            date: "24.12",
            detail_text: "",
        },
        {
            prompt_text: "Geschenke auspacken",
            date: "25.12",
            detail_text: "",
        },
        {
            prompt_text: "Silber",
            date: "26.12",
            detail_text: "",
        },
        {
            prompt_text: "Tannenzapfen",
            date: "27.12",
            detail_text: "",
        },
        {
            prompt_text: "Suppe",
            date: "28.12",
            detail_text: "",
        },
        {
            prompt_text: "T steht für",
            date: "29.12",
            detail_text: "",
        },
        {
            prompt_text: "Heutige Temperatur",
            date: "30.12",
            detail_text: "",
        },
        {
            prompt_text: "Ein Gedanke für das nächste Jahr",
            date: "31.12",
            detail_text: "",
        },

    ];

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function postData(url = '', data = {detail_text: "",}, mode = "update") {

    let fetch_init =
        {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }

    switch (mode) {
        case 'insert': {
            fetch_init.method = "POST"
            break;
        }

        case 'update': {
            // build querystring to get record
            let filter = `?filter=(date='${data.date}')`
            fetch_init.method = "GET"

            // get record for the id
            const response = await fetch(url + filter, fetch_init);
            const json = await response.json();

            // update url for specific record
            url += `/${json.items[0].id}`
            fetch_init.method = "PATCH"
            break;
        }

        default: {
            fetch_init.method = "POST"
        }
    }


    fetch_init.body = JSON.stringify(data)

    // Default options are marked with *
    const response = await fetch(url, fetch_init);
    return response.json(); // parses JSON response into native JavaScript objects
}

async function run() {

    document.writeln("<h1>Import started</h1>")
    document.writeln("<ul style='overflow: hidden'>")


    for (const dataKey in data) {
        const response = await postData(url, data[dataKey])

        if (typeof response.code === 'undefined') {
            document.writeln(`<li style="color:darkgreen">${response.prompt_text} update OK</li>`)
        } else {
            document.writeln(`<li style="color:darkred">${response.prompt_text} update ERROR</li>`)
        }


        await delay(100);
    }

    document.writeln("</ul>")

    document.writeln("<h1>Import ended</h1>")
}

run();