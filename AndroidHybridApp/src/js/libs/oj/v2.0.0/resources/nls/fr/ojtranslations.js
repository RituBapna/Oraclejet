define({"oj-message":{fatal:"Fatal",error:"Erreur",warning:"Avertissement",info:"Informations",confirmation:"Confirmation","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"La valeur n'est pas au format attendu.",detail:"Entrez une valeur au format attendu.","plural-separator":", ",hint:{summary:"Exemple : {exampleValue}",detail:"Entrez une valeur avec le même format que l'exemple suivant : '{exampleValue}'","detail-plural":"Entrez une valeur avec le même format que les exemples suivants : '{exampleValue}'"},
optionHint:{detail:"La valeur acceptée pour l'option '{propertyName}' est '{propertyValueValid}'.","detail-plural":"Les valeurs acceptées pour l'option '{propertyName}' sont '{propertyValueValid}'."},optionTypesMismatch:{summary:"Une valeur est obligatoire pour l'option '{requiredPropertyName}' lorsque l'option '{propertyName}' est définie sur '{propertyValue}'."},optionTypeInvalid:{summary:"Aucune valeur du type attendu n'a été fournie pour l'option '{propertyName}'."},optionOutOfRange:{summary:"La valeur {propertyValue} est hors limites pour l'option '{propertyName}'."},
optionValueInvalid:{summary:"La valeur non valide '{propertyValue}' a été indiquée pour l'option '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' n'est pas dans le format numérique attendu."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' et 'long' ne sont pas pris en charge pour l'analyse du convertisseur.",detail:"Remplacez le composant par readOnly. Les champs readOnly n'appellent pas la fonction d'analyse du convertisseur."},currencyFormatMismatch:{summary:"'{value}' n'est pas dans le format de devise attendu."},
percentFormatMismatch:{summary:"'{value}' n'est pas dans le format de pourcentage attendu."}},datetime:{datetimeOutOfRange:{summary:"La valeur '{value}' est hors limites pour '{propertyName}'.",detail:"Entrez une valeur comprise entre '{minValue}' et '{maxValue}'."},dateFormatMismatch:{summary:"'{value}' n'est pas dans le format de date attendu."},timeFormatMismatch:{summary:"'{value}' n'est pas dans le format d'heure attendu."},datetimeFormatMismatch:{summary:"'{value}' n'est pas dans le format de date et heure attendu."},
dateToWeekdayMismatch:{summary:"Le '{date}' ne tombe pas un '{weekday}'.",detail:"Entrez un jour de la semaine qui correspond à la date."}}},"oj-validator":{length:{hint:{min:"Entrez au moins {min} caractères.",max:"Entrez {max} caractères ou moins.",inRange:"Entrez au moins {min} caractères, jusqu'à un maximum de {max}.",exact:"Entrez {length} caractères."},messageDetail:{tooShort:"Entrez {min} caractères ou plus, mais pas moins.",tooLong:"Entrez {max} caractères ou moins, mais pas plus."},messageSummary:{tooShort:"Il y a trop peu de caractères.",
tooLong:"Il y a trop de caractères."}},range:{number:{hint:{min:"Entrez un nombre supérieur à ou égal à {min}.",max:"Entrez un nombre inférieur à ou égal à {max}.",inRange:"Entrez un nombre compris entre {min} et {max}."},messageDetail:{rangeUnderflow:"Le nombre {value} doit être supérieur à ou égal à {min}.",rangeOverflow:"Le nombre {value} doit être inférieur ou égal à {max}."},messageSummary:{rangeUnderflow:"Le nombre est trop faible.",rangeOverflow:"Le nombre est trop élevé."}},datetime:{hint:{min:"Entrez une date et une heure postérieures ou égales au {min}.",
max:"Entrez une date et une heure antérieures ou égales au {max}.",inRange:"Entrez une date et une heure comprises entre le {min} et le {max}."},messageDetail:{rangeUnderflow:"La date et l'heure doivent être postérieures ou égales au {min}.",rangeOverflow:"La date et l'heure doivent être antérieures ou égales au {max}."},messageSummary:{rangeUnderflow:"La date et l'heure sont antérieures à la date minimale.",rangeOverflow:"La date et l'heure sont postérieures à la date maximale."}}},restriction:{date:{messageSummary:"La date {value} est celle d'une entrée désactivée.",
messageDetail:"La date {value} ne doit pas être celle d'une entrée désactivée."}},regExp:{summary:"Le format est incorrect. ",detail:"La valeur '{value}' doit correspondre au modèle suivant : '{pattern}'"},required:{summary:"La valeur est obligatoire.",detail:"Vous devez entrer une valeur."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Préc.",nextText:"Suiv.",currentText:"Aujourd'hui",weekHeader:"Sem.",tooltipCalendar:"Sélectionner une date",
tooltipCalendarDisabled:"Option Sélectionner une date désactivée",weekText:"Semaine",datePicker:"Sélecteur de date",inputHelp:"Appuyez sur la touche de défilement vers le bas ou le haut pour accéder au calendrier",inputHelpBoth:"Appuyez sur la touche de défilement vers le bas ou le haut pour accéder au calendrier et sur Maj+touche de défilement vers le bas ou le haut pour accéder à la liste déroulante d'heure",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},
messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Sélectionner l'heure",tooltipTimeDisabled:"Option Sélectionner une heure désactivée",inputHelp:"Appuyez sur la touche de défilement vers le bas ou le haut pour accéder à la liste déroulante d'heure",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",
messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"La valeur doit correspondre au modèle suivant : '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Page suivante",labelAccArrowPreviousPage:"Page précédente",tipArrowNextPage:"Suivant",tipArrowPreviousPage:"Précédent"},"oj-ojDataGrid":{accessibleSortAscending:"{id} trié par ordre croissant",accessibleSortDescending:"{id} trié par ordre décroissant",accessibleActionableMode:"Passer au mode d'intervention",accessibleNavigationMode:"Passer au mode de navigation",
accessibleSummaryExact:"Il s'agit d'une grille de données avec {rownum} lignes et {colnum} colonnes",accessibleSummaryEstimate:"Il s'agit d'une grille de données avec un nombre inconnu de lignes et de colonnes",accessibleSummaryExpanded:"{num} lignes sont actuellement développées",accessibleRowExpanded:"Ligne développée",accessibleRowCollapsed:"Ligne réduite",accessibleRowSelected:"Ligne {row} sélectionnée",accessibleColumnSelected:"Colonne {column} sélectionnée",accessibleStateSelected:"sélectionné",
accessibleMultiCellSelected:"{num} cellules sélectionnées",accessibleRowContext:"Ligne {index}",accessibleColumnContext:"Colonne {index}",accessibleRowHeaderContext:"En-tête de ligne {index}",accessibleColumnHeaderContext:"En-tête de colonne {index}",accessibleLevelContext:"Niveau {level}",accessibleRangeSelectModeOn:"Mode Ajouter la plage de cellules sélectionnée activé",accessibleRangeSelectModeOff:"Mode Ajouter la plage de cellules sélectionnée désactivé",accessibleFirstRow:"Vous avez atteint la première ligne",
accessibleLastRow:"Vous avez atteint la dernière ligne",accessibleFirstColumn:"Vous avez atteint la première colonne",accessibleLastColumn:"Vous avez atteint la dernière colonne",accessibleSelectionAffordanceTop:"Poignée de sélection supérieure",accessibleSelectionAffordanceBottom:"Poignée de sélection inférieure",msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher.",labelResize:"Redimensionner",labelResizeWidth:"Redimensionner la largeur",labelResizeHeight:"Redimensionner la hauteur",
labelSortRow:"Trier la ligne",labelSortRowAsc:"Trier la ligne par ordre croissant",labelSortRowDsc:"Trier la ligne par ordre décroissant",labelSortCol:"Trier la colonne",labelSortColAsc:"Trier la colonne par ordre croissant",labelSortColDsc:"Trier la colonne par ordre décroissant",labelCut:"Couper",labelPaste:"Coller",labelEnableNonContiguous:"Activer la sélection non contiguë",labelDisableNonContiguous:"Désactiver la sélection non contiguë",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Niveau {level}",
accessibleRowDescription:"Niveau {level}, ligne {num} sur {total}",accessibleRowExpanded:"Ligne développée",accessibleRowCollapsed:"Ligne réduite",accessibleStateExpanded:"développé",accessibleStateCollapsed:"réduit"},"oj-ojListView":{msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z"},"oj-_ojLabel":{tooltipHelp:"Aide",tooltipRequired:"Obligatoire"},"oj-ojInputNumber":{numberRange:{hint:{min:"",
max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Décrémenter",tooltipIncrement:"Incrémenter"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Poignée de sélection supérieure",labelAccSelectionAffordanceBottom:"Poignée de sélection inférieure",labelSelectRow:"Sélectionner une ligne",labelSelectColumn:"Sélectionner une colonne",labelSort:"Trier",labelSortAsc:"Trier par ordre croissant",labelSortDsc:"Trier par ordre décroissant",
msgFetchingData:"Extraction des données...",msgNoData:"Aucune donnée à afficher."},"oj-ojTabs":{labelCut:"Couper",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après",labelRemove:"Enlever",labelReorder:"Réorganiser",removeCueText:"Peut être enlevé"},"oj-ojSelect":{seachField:"Champ de recherche",noMatchesFound:"Aucune correspondance trouvée"},"oj-ojSwitch":{SwitchON:"Activé",SwitchOFF:"Désactivé"},"oj-ojCombobox":{noMatchesFound:"Aucune correspondance trouvée"},"oj-ojInputSearch":{noMatchesFound:"Aucune correspondance trouvée"},
"oj-ojTree":{stateLoading:"Chargement...",labelNewNode:"Nouveau noeud",labelMultiSelection:"Sélection multiple",labelEdit:"Modifier",labelCreate:"Créer",labelCut:"Couper",labelCopy:"Copier",labelPaste:"Coller",labelRemove:"Enlever",labelRename:"Renommer",labelNoData:"Aucune donnée"},"oj-ojPagingControl":{labelAccPaging:"Pagination",labelAccNavFirstPage:"Première page",labelAccNavLastPage:"Dernière page",labelAccNavNextPage:"Page suivante",labelAccNavPreviousPage:"Page précédente",labelAccNavPage:"Page ",
labelLoadMore:"Afficher plus...",labelLoadMoreMaxRows:"Limite maximale de {maxRows} lignes atteinte",labelNavInputPage:"Page ",labelNavInputPageMax:"sur {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"sur",msgItemRangeOfAtLeast:"d'au moins",msgItemRangeOfApprox:"d'environ",msgItemRangeItems:"éléments",tipNavInputPage:"Aller à la page",tipNavPageLink:"Aller à la page {pageNum}",tipNavNextPage:"Suivant",tipNavPreviousPage:"Précédent",tipNavFirstPage:"Premier",
tipNavLastPage:"Dernier",pageInvalid:{summary:"La valeur de page saisie n'est pas valide.",detail:"Entrez une valeur supérieure à 0."},maxPageLinksInvalid:{summary:"La valeur de maxPageLinks n'est pas valide.",detail:"Entrez une valeur supérieure à 4."}},"oj-ojMasonryLayout":{labelCut:"Couper",labelPasteBefore:"Coller avant",labelPasteAfter:"Coller après"},"oj-panel":{labelAccButtonExpand:"Développer",labelAccButtonCollapse:"Réduire",labelAccButtonRemove:"Enlever"},"oj-ojChart":{labelDefaultGroupName:"Groupe {0}",
labelSeries:"Série",labelGroup:"Groupe",labelDate:"Date",labelValue:"Valeur",labelTargetValue:"Cible",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Pourcentage",labelLow:"Faible",labelHigh:"Elevé",labelOpen:"Ouvrir",labelClose:"Fermer",labelVolume:"Volume",labelMin:"Min.",labelMax:"Max.",labelOther:"Autre",tooltipPan:"Panoramique",tooltipSelect:"Sélection par rectangle de sélection",tooltipZoom:"Zoom par rectangle de sélection",componentName:"Graphique"},"oj-dvtBaseGauge":{componentName:"Jauge"},
"oj-ojDiagram":{componentName:"Diagramme"},"oj-ojLegend":{componentName:"Légende"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Autre",labelGroup:"Groupe",labelSize:"Taille",labelAdditionalData:"Données supplémentaires",componentName:"Grille à neuf cases"},"oj-ojPictoChart":{componentName:"Graphique d'images"},"oj-ojSparkChart":{componentName:"Graphique"},"oj-ojSunburst":{labelColor:"Couleur",labelSize:"Taille",componentName:"Sunburst (pavage de cercles)"},"oj-ojTagCloud":{componentName:"Nuage de mots-clés"},
"oj-ojThematicMap":{componentName:"Carte thématique"},"oj-ojTimeline":{componentName:"Chronologie",labelSeries:"Série",tooltipZoomIn:"Zoom avant",tooltipZoomOut:"Zoom arrière"},"oj-ojTreemap":{labelColor:"Couleur",labelSize:"Taille",tooltipIsolate:"Isoler",tooltipRestore:"Restaurer",componentName:"Vue Treemap (pavage de l'espace)"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",
labelInvalidData:"Données non valides",labelNoData:"Aucune donnée à afficher",labelClearSelection:"Effacer la sélection",labelDataVisualization:"Visualisation des données",stateSelected:"Sélectionné",stateUnselected:"Non sélectionné",stateMaximized:"Agrandi",stateMinimized:"Réduit",stateExpanded:"Développé",stateCollapsed:"Réduit",stateIsolated:"Isolé",stateHidden:"Masqué",stateVisible:"Visible",stateDrillable:"Explorable",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} sur {1}"},"oj-ojNavigationList":{defaultRootLabel:"Liste de navigation",
hierMenuBtnLabel:"Bouton de menu hiérarchique",selectedLabel:"sélectionné",previousIcon:"Précédent",msgFetchingData:"Extraction des données...",msgNoData:"Aucun élément à afficher."},"oj-ojSlider":{noValue:"ojSlider n'a aucune valeur",maxMin:"La valeur maximale doit être supérieure à la valeur minimale",valueRange:"La valeur doit être comprise dans la plage des valeurs minimales à maximales",optionNum:"L'option {option} n'est pas un nombre",invalidStep:"Etape non valide. Elle doit être > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Accès à la fenêtre instantanée. Appuyez sur F6 pour naviguer entre la fenêtre instantanée et le contrôle associé.",
ariaLiveRegionInitialFocusNone:"Fenêtre instantanée ouverte. Appuyez sur F6 pour naviguer entre la fenêtre instantanée et le contrôle associé.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Accès à la fenêtre instantanée. Pour fermer cette fenêtre, accédez au dernier lien qu'elle contient.",ariaLiveRegionInitialFocusNoneTouch:"Fenêtre instantanée ouverte. Accédez au lien suivant pour définir le focus dans la fenêtre instantanée.",ariaFocusSkipLink:"Touchez deux fois pour accéder à la fenêtre instantanée ouverte.",
ariaCloseSkipLink:"Touchez deux fois pour fermer la fenêtre instantanée ouverte."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Entrée dans le menu. Impossible de fermer le menu sans avoir sélectionné une option de menu en accédant au lien suivant le menu.",ariaLiveRegionInitialFocusNoneTouch:"Menu ouvert. Accédez au lien suivant pour définir le focus dans le menu.","ariaPreceding Link":"Avancez pour atteindre le menu ouvert.",ariaFocusSkipLink:"Touchez deux fois pour accéder au menu ouvert.",
ariaCloseSkipLink:"Touchez deux fois pour fermer le menu ouvert."},"oj-pullToRefresh":{ariaRefreshLink:"Activer le lien pour actualiser le contenu",ariaRefreshingLink:"Actualisation du contenu",ariaRefreshCompleteLink:"Actualisation terminée"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Aucun en-tête de groupe correspondant",ariaOthersLabel:"nombre",ariaInBetweenText:"Entre {first} et {second}",ariaKeyboardInstructionText:"Appuyez sur Entrée pour sélectionner une valeur.",ariaTouchInstructionText:"Touchez deux fois et maintenez le toucher pour passer en mode d'opération, puis faites glisser vers le haut ou le bas pour ajuster la valeur."}});