

//Specify affected tags. Add or remove from list:
var tgs = new Array( '.contLeft', 'h3', '.contLeft-menu');

//Specify spectrum of different font sizes:
//var szs = new Array( 'xx-small','x-small','small','medium','large','x-large','xx-large' );
var szs = new Array( 'xx-small','x-small','small','medium','large','x-large' );
var startSz = 2;

function ts( trgt,inc ) {
	if (!document.getElementById) return
	var d = document,cEl = null,sz = startSz,i,j,cTags;
	
	sz += inc;
	if ( sz < 0 ) sz = 0;
	if ( sz > 6 ) sz = 6;
	startSz = sz;
		
	if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ];

	cEl.style.fontSize = szs[ sz ];

	for ( i = 0 ; i < tgs.length ; i++ ) {
		cTags = cEl.getElementsByTagName( tgs[ i ] );
		for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ];
	}
}