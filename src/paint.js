var _0x4ebb=['fillStyle','Rotation\x20D','TETRIS','scrollWidth','drawRestart','getElementById','nbColonnes','Gold','Droite','nbLignes','Rotation\x20Gauche\x20ou\x20Droite:\x20touches\x20Q\x20ou\x20W','canvas','Purple','strokeText','responsive','clearRect','green','fillRect','drawMenu','134253umHdrz','849454tdncTb','getContext','Rotation\x20G','strokeStyle','1bpIqFu','60px\x20Georgia','Magenta','scrollHeight','beginPath','font','126224Gdanyb','moveTo','2025748XdbUaP','90px\x20Georgia','position','307811tiWyHo','black','RE-START','Orange','GAME\x20OVER','closePath','height','blue','tailleCase','drawGrid','1043957POqoAA','width','emplacementVertical','stroke','144527APZprZ','fillText','documentElement','length','Bas','40px\x20Georgia','emplacementHorizontal','rotation','red','lineTo','strokeRect','lineWidth'];var _0xb2ffb1=_0x5891;function _0x5891(_0x5db6ed,_0x21c4b7){_0x5db6ed=_0x5db6ed-0x181;var _0x4ebb56=_0x4ebb[_0x5db6ed];return _0x4ebb56;}(function(_0x5de588,_0x21f29e){var _0x1667c8=_0x5891;while(!![]){try{var _0x2229fc=-parseInt(_0x1667c8(0x1b6))+parseInt(_0x1667c8(0x1ac))+-parseInt(_0x1667c8(0x19c))+parseInt(_0x1667c8(0x1a7))+-parseInt(_0x1667c8(0x19d))+parseInt(_0x1667c8(0x1ba))*parseInt(_0x1667c8(0x1a1))+parseInt(_0x1667c8(0x1a9));if(_0x2229fc===_0x21f29e)break;else _0x5de588['push'](_0x5de588['shift']());}catch(_0x31a47f){_0x5de588['push'](_0x5de588['shift']());}}}(_0x4ebb,0x8cc86));var canvas=document[_0xb2ffb1(0x18e)]('canvas'),ctx=canvas[_0xb2ffb1(0x19e)]('2d'),colorArray=['white',_0xb2ffb1(0x199),'red',_0xb2ffb1(0x1b3),'LawnGreen',_0xb2ffb1(0x190),'Aqua','Purple'];class Paint{constructor(_0x165d1b,_0xf312c2){var _0x316d46=_0xb2ffb1;this[_0x316d46(0x192)]=_0x165d1b,this[_0x316d46(0x18f)]=_0xf312c2,ctx[_0x316d46(0x194)]['width']=document[_0x316d46(0x1bc)][_0x316d46(0x18c)],ctx[_0x316d46(0x194)][_0x316d46(0x1b2)]=document[_0x316d46(0x1bc)][_0x316d46(0x1a4)],this['responsive']();}[_0xb2ffb1(0x197)](){var _0x3ead68=_0xb2ffb1;document['documentElement'][_0x3ead68(0x18c)]<document[_0x3ead68(0x1bc)][_0x3ead68(0x1a4)]?(this['tailleCase']=document[_0x3ead68(0x1bc)][_0x3ead68(0x18c)]*0x37/0x64/nbColonnes,this['emplacementHorizontal']=document[_0x3ead68(0x1bc)][_0x3ead68(0x18c)]*0x16/0x64,this[_0x3ead68(0x1b8)]=this[_0x3ead68(0x1b4)]*0x2):(this[_0x3ead68(0x1b4)]=document[_0x3ead68(0x1bc)]['scrollWidth']*0x14/0x64/nbColonnes,this[_0x3ead68(0x183)]=document[_0x3ead68(0x1bc)][_0x3ead68(0x18c)]*0x28/0x64,this[_0x3ead68(0x1b8)]=this[_0x3ead68(0x1b4)]*0x2);}[_0xb2ffb1(0x1b5)](_0x9324e4,_0x43777d,_0x259aa2,_0x4f24ee){var _0x5ccab7=_0xb2ffb1;ctx[_0x5ccab7(0x198)](0x0,0x0,ctx[_0x5ccab7(0x194)][_0x5ccab7(0x1b7)],ctx['canvas']['height']),ctx[_0x5ccab7(0x189)]='black',ctx[_0x5ccab7(0x188)]=0x2,ctx[_0x5ccab7(0x187)](this[_0x5ccab7(0x183)],this[_0x5ccab7(0x1b8)],this[_0x5ccab7(0x18f)]*this[_0x5ccab7(0x1b4)],this['nbLignes']*this[_0x5ccab7(0x1b4)]),ctx[_0x5ccab7(0x189)]='grey',ctx[_0x5ccab7(0x19a)](this[_0x5ccab7(0x183)]+ctx[_0x5ccab7(0x188)]/0x2,this[_0x5ccab7(0x1b8)]+ctx[_0x5ccab7(0x188)]/0x2,this[_0x5ccab7(0x18f)]*this[_0x5ccab7(0x1b4)],this[_0x5ccab7(0x192)]*this[_0x5ccab7(0x1b4)]);for(let _0x3dfadb=0x0;_0x3dfadb<this[_0x5ccab7(0x18f)];_0x3dfadb++){ctx[_0x5ccab7(0x1a5)](),ctx[_0x5ccab7(0x1a8)](this[_0x5ccab7(0x183)]+this['tailleCase']*(_0x3dfadb+0x1),this[_0x5ccab7(0x1b8)]),ctx['lineTo'](this['emplacementHorizontal']+this['tailleCase']*(_0x3dfadb+0x1),this[_0x5ccab7(0x1b8)]+this[_0x5ccab7(0x192)]*this[_0x5ccab7(0x1b4)]),ctx[_0x5ccab7(0x1b1)](),ctx[_0x5ccab7(0x1b9)]();}for(let _0x44b2f0=0x0;_0x44b2f0<this[_0x5ccab7(0x192)];_0x44b2f0++){ctx['beginPath'](),ctx[_0x5ccab7(0x1a8)](this[_0x5ccab7(0x183)],this[_0x5ccab7(0x1b8)]+this[_0x5ccab7(0x1b4)]*(_0x44b2f0+0x1)),ctx[_0x5ccab7(0x186)](this[_0x5ccab7(0x183)]+this[_0x5ccab7(0x18f)]*this[_0x5ccab7(0x1b4)],this[_0x5ccab7(0x1b8)]+this['tailleCase']*(_0x44b2f0+0x1)),ctx[_0x5ccab7(0x1b1)](),ctx[_0x5ccab7(0x1b9)]();}for(var _0x2d592c=0x0;_0x2d592c<_0x43777d[_0x259aa2][_0x5ccab7(0x184)][_0x4f24ee][_0x5ccab7(0x1bd)];_0x2d592c++){for(var _0x23ae01=0x0;_0x23ae01<_0x43777d[_0x259aa2][_0x5ccab7(0x184)][_0x4f24ee]['length'];_0x23ae01++){_0x43777d[_0x259aa2][_0x5ccab7(0x184)][_0x4f24ee][_0x2d592c][_0x23ae01]!=0x0&&(ctx[_0x5ccab7(0x189)]=colorArray[_0x43777d[_0x259aa2]['rotation'][_0x4f24ee][_0x2d592c][_0x23ae01]],ctx[_0x5ccab7(0x189)]=0x1,ctx[_0x5ccab7(0x19a)](this[_0x5ccab7(0x183)]+_0x23ae01*this[_0x5ccab7(0x1b4)]+_0x43777d[_0x259aa2][_0x5ccab7(0x1ab)][0x0]*this[_0x5ccab7(0x1b4)]+ctx['lineWidth']/0x2,this[_0x5ccab7(0x1b8)]+_0x2d592c*this[_0x5ccab7(0x1b4)]+_0x43777d[_0x259aa2][_0x5ccab7(0x1ab)][0x1]*this['tailleCase']+ctx[_0x5ccab7(0x188)]/0x2,this[_0x5ccab7(0x1b4)]-ctx['lineWidth'],this['tailleCase']-ctx[_0x5ccab7(0x188)]));}}for(var _0x2d592c=0x0;_0x2d592c<this['nbLignes'];_0x2d592c++){for(var _0x23ae01=0x0;_0x23ae01<this['nbColonnes'];_0x23ae01++){_0x9324e4[_0x2d592c][_0x23ae01]!=0x0&&(ctx[_0x5ccab7(0x189)]=colorArray[_0x9324e4[_0x2d592c][_0x23ae01]],ctx[_0x5ccab7(0x189)]=0x1,ctx['fillRect'](this['emplacementHorizontal']+_0x23ae01*this['tailleCase']+ctx['lineWidth']/0x2,this[_0x5ccab7(0x1b8)]+_0x2d592c*this[_0x5ccab7(0x1b4)]+ctx[_0x5ccab7(0x188)]/0x2,this['tailleCase']-ctx[_0x5ccab7(0x188)],this[_0x5ccab7(0x1b4)]-ctx[_0x5ccab7(0x188)]));}}document['documentElement']['scrollWidth']<document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]&&(ctx[_0x5ccab7(0x1a6)]=_0x5ccab7(0x182),ctx['fillStyle']='black',ctx['lineWidth']=0x2,ctx['strokeRect'](document['documentElement'][_0x5ccab7(0x18c)]*0x3/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x4f/0x64,document['documentElement'][_0x5ccab7(0x18c)]*0x17/0x64,document['documentElement']['scrollHeight']*0x5/0x64),ctx[_0x5ccab7(0x1bb)](_0x5ccab7(0x19f),document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x5/0x64,document[_0x5ccab7(0x1bc)]['scrollHeight']*0x53/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5/0x64),ctx['strokeRect'](document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x3/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x55/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)]['scrollHeight']*0x5/0x64),ctx['fillText']('Gauche',document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x8/0x64,document['documentElement'][_0x5ccab7(0x1a4)]*0x59/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5/0x64),ctx['strokeRect'](document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x3/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5b/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document['documentElement'][_0x5ccab7(0x1a4)]*0x5/0x64),ctx[_0x5ccab7(0x1bb)](_0x5ccab7(0x181),document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0xb/0x64,document['documentElement'][_0x5ccab7(0x1a4)]*0x5e/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)]['scrollHeight']*0x5/0x64),ctx[_0x5ccab7(0x187)](document[_0x5ccab7(0x1bc)]['scrollWidth']*0x4a/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x4f/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5/0x64),ctx[_0x5ccab7(0x1bb)](_0x5ccab7(0x18a),document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x4c/0x64,document[_0x5ccab7(0x1bc)]['scrollHeight']*0x53/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document['documentElement'][_0x5ccab7(0x1a4)]*0x5/0x64),ctx[_0x5ccab7(0x187)](document[_0x5ccab7(0x1bc)]['scrollWidth']*0x4a/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x55/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5/0x64),ctx['fillText'](_0x5ccab7(0x191),document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x50/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x59/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document['documentElement'][_0x5ccab7(0x1a4)]*0x5/0x64),ctx[_0x5ccab7(0x187)](document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x4a/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5b/0x64,document['documentElement'][_0x5ccab7(0x18c)]*0x17/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5/0x64),ctx[_0x5ccab7(0x1bb)](_0x5ccab7(0x181),document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x53/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x1a4)]*0x5e/0x64,document[_0x5ccab7(0x1bc)][_0x5ccab7(0x18c)]*0x17/0x64,document['documentElement']['scrollHeight']*0x5/0x64));}[_0xb2ffb1(0x19b)](){var _0x4e68b4=_0xb2ffb1;ctx[_0x4e68b4(0x198)](0x0,0x0,ctx[_0x4e68b4(0x194)]['width'],ctx[_0x4e68b4(0x194)]['height']),ctx[_0x4e68b4(0x1a6)]=_0x4e68b4(0x1aa),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x185),ctx['fillText']('T',document[_0x4e68b4(0x1bc)]['scrollWidth']/0x3,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x1b3),ctx['fillText']('E',document['documentElement'][_0x4e68b4(0x18c)]/0x3+0x38,document['documentElement'][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x199),ctx[_0x4e68b4(0x1bb)]('T',document[_0x4e68b4(0x1bc)][_0x4e68b4(0x18c)]/0x3+0x73,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x195),ctx[_0x4e68b4(0x1bb)]('R',document['documentElement'][_0x4e68b4(0x18c)]/0x3+0xaa,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx['fillStyle']=_0x4e68b4(0x1af),ctx[_0x4e68b4(0x1bb)]('I',document['documentElement']['scrollWidth']/0x3+0xe9,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x1a3),ctx['fillText']('S',document[_0x4e68b4(0x1bc)]['scrollWidth']/0x3+0x10c,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x1a0)]=_0x4e68b4(0x1ad),ctx[_0x4e68b4(0x196)](_0x4e68b4(0x18b),document[_0x4e68b4(0x1bc)]['scrollWidth']/0x3+0x2,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]/0x2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x1ad),ctx[_0x4e68b4(0x188)]=0x2,ctx[_0x4e68b4(0x187)](document['documentElement'][_0x4e68b4(0x18c)]/0x3+0x3c,document['documentElement'][_0x4e68b4(0x1a4)]/0x2+0x50,0xc8,0x64),ctx[_0x4e68b4(0x1a6)]=_0x4e68b4(0x1a2),ctx[_0x4e68b4(0x189)]=_0x4e68b4(0x1ad),ctx[_0x4e68b4(0x1bb)]('START',document[_0x4e68b4(0x1bc)][_0x4e68b4(0x18c)]/0x3+0x41,document['documentElement'][_0x4e68b4(0x1a4)]/0x2+0x8c),ctx[_0x4e68b4(0x1a6)]=_0x4e68b4(0x182),ctx[_0x4e68b4(0x189)]='black',ctx[_0x4e68b4(0x1bb)](_0x4e68b4(0x193),document[_0x4e68b4(0x1bc)]['scrollWidth']*0x19/0x64,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]*0x19/0x64),ctx['fillText']('Mouvements:\x20touches\x20fléchées',document[_0x4e68b4(0x1bc)][_0x4e68b4(0x18c)]*0x19/0x64,document[_0x4e68b4(0x1bc)][_0x4e68b4(0x1a4)]*0x1e/0x64);}[_0xb2ffb1(0x18d)](){var _0x39be73=_0xb2ffb1;ctx[_0x39be73(0x189)]=_0x39be73(0x1ad),ctx[_0x39be73(0x19a)](document['documentElement'][_0x39be73(0x18c)]/0x5-0x5,document[_0x39be73(0x1bc)][_0x39be73(0x1a4)]/0x2-0x5a,0x226,0x82),ctx[_0x39be73(0x1a6)]='90px\x20Georgia',ctx['fillStyle']=_0x39be73(0x185),ctx[_0x39be73(0x1bb)](_0x39be73(0x1b0),document['documentElement'][_0x39be73(0x18c)]/0x5,document[_0x39be73(0x1bc)][_0x39be73(0x1a4)]/0x2),ctx[_0x39be73(0x189)]=_0x39be73(0x1ad),ctx[_0x39be73(0x188)]=0x2,ctx[_0x39be73(0x189)]=_0x39be73(0x1b3),ctx[_0x39be73(0x19a)](document['documentElement'][_0x39be73(0x18c)]/0x3+0x1e,document[_0x39be73(0x1bc)][_0x39be73(0x1a4)]/0x3-0x1e,0xc8,0x50),ctx['font']=_0x39be73(0x182),ctx[_0x39be73(0x189)]=_0x39be73(0x1ad),ctx['fillText'](_0x39be73(0x1ae),document[_0x39be73(0x1bc)][_0x39be73(0x18c)]/0x3+0x1e,document['documentElement'][_0x39be73(0x1a4)]/0x3+0x19);}}