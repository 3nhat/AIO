/*
const webWorkerJQueryFix = () => {
    document = self.document = { parentNode: null, nodeType: 9, toString: () => { return "FakeDocument" } };
    window = self.window = self;
    const fakeElement = Object.create(document);
    fakeElement.nodeType = 1;
    fakeElement.toString = () => { return "FakeElement" };
    fakeElement.parentNode = fakeElement.firstChild = fakeElement.lastChild = fakeElement;
    fakeElement.ownerDocument = document;

    document.innerHTML = "";
    document.head =
        document.body =
        fakeElement;
    document.ownerDocument =
        document.documentElement =
        document;

    document.createElement =
        document.getElementById =
        document.getElementsByClassName =
        document.getElementsByTagName = () => { return [fakeElement]; };

    document.appendChild = (child) => { return child; };

    document.createDocumentFragment = () => {
        this.appendChild = document.appendChild;
        return this;
    };

    document.getAttribute =
        document.removeChild =
        document.addEventListener =
        document.removeEventListener =
        document.setAttribute = () => { return null; };

    document.cloneNode = () => {
        this.cloneNode = document.cloneNode;
        this.lastChild = {
            checked: false,
        }
        return this;
    };

    document.childNodes = [];
    document.implementation = {
        createHTMLDocument: () => { return document; }
    }
}
*/

function T(exp){
    //(function(_0x96b2af,_0x4d2ea4){var _0x490b08=_0x96b2af();function _0x35254b(_0x422cc5,_0x581b1d){return _0x39d6(_0x581b1d-'\x30\x78\x33\x31\x30',_0x422cc5);}while(!![]){try{var _0x3b33be=parseInt(_0x35254b('\x30\x78\x33\x38\x30','\x30\x78\x33\x37\x37'))/0x1+parseInt(_0x35254b('\x30\x78\x33\x62\x30','\x30\x78\x33\x61\x36'))/0x2*(-parseInt(_0x35254b('\x30\x78\x33\x37\x62','\x30\x78\x33\x39\x35'))/0x3)+-parseInt(_0x35254b('\x30\x78\x33\x37\x64','\x30\x78\x33\x37\x65'))/0x4*(-parseInt(_0x35254b('\x30\x78\x33\x61\x61','\x30\x78\x33\x38\x65'))/0x5)+-parseInt(_0x35254b('\x30\x78\x33\x39\x33','\x30\x78\x33\x39\x38'))/0x6*(-parseInt(_0x35254b('\x30\x78\x33\x61\x36','\x30\x78\x33\x61\x38'))/0x7)+-parseInt(_0x35254b('\x30\x78\x33\x37\x61','\x30\x78\x33\x37\x62'))/0x8+parseInt(_0x35254b('\x30\x78\x33\x61\x33','\x30\x78\x33\x39\x30'))/0x9*(-parseInt(_0x35254b('\x30\x78\x33\x38\x64','\x30\x78\x33\x61\x61'))/0xa)+-parseInt(_0x35254b('\x30\x78\x33\x38\x38','\x30\x78\x33\x37\x63'))/0xb*(-parseInt(_0x35254b('\x30\x78\x33\x61\x64','\x30\x78\x33\x39\x64'))/0xc);if(_0x3b33be===_0x4d2ea4)break;else _0x490b08['push'](_0x490b08['shift']());}catch(_0xb0da4e){_0x490b08['push'](_0x490b08['shift']());}}}(_0x1321,0x20085));function _0x1321(){var _0x2e5158=['\u00e3\x20\x68\u1ed9\x69','\x72\x65\x70\x6c\x61\x63\x65','\x37\x39\x31\x34\x38\x38\x71\x4e\x47\x65\x6d\x74','\x31\x31\x70\x63\x42\x79\x52\x65','\x61\x63\x74\x69\x6f\x6e','\x38\x73\x71\x49\x68\x64\x45','\x73\x6c\x69\x63\x65','\x6c\x65\x6e\x67\x74\x68','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x69\x6e\x69\x74','\x42\x62\x2e\x50\x72\x69\x41\x43\x6f\x6b','\x54\x6f\x61\x64\x6f','\x4e\x6f\x53\x74\x72\x69\x6e\x67\x46\x75','\x4a\x47\x6c\x57\x4b\x6c\x73\x55\x49\x50','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f','\x4a\x6d\x64\x67\x48\x50\x44\x70\x59\x51','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x66\x41\x63\x70\x47\x76\x56\x66\x58\x52','\x63\x68\x61\x69\x6e','\x33\x7a\x4b\x4b\x6e\x53\x68\x73\x61\x74','\x58\x76\x66\x79\x53\x61\x62\x6a\x6f\x48','\x31\x37\x38\x36\x31\x30\x54\x79\x49\x6c\x77\x6a','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x34\x34\x35\x35\x39\x57\x47\x47\x4f\x78\x47','\x61\x70\x70\x6c\x79','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x4d\x4e\x46\x54\x4a\x47\x6c\x57\x4b\x6c','\x73\x70\x6c\x69\x74','\x33\x39\x33\x36\x33\x53\x79\x4d\x58\x41\x65','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x31\x38\x4c\x55\x61\x41\x51\x4a','\x63\x6f\x75\x6e\x74\x65\x72','\x73\x74\x72\x69\x6e\x67','\x46\x75\x6e\x63\x5f\x52\x75\x6e\x30\x32','\x42\x50\x72\x41\x43\x6b\x66\x44\x42\x4b','\x32\x34\x35\x34\x33\x37\x32\x6d\x42\x72\x53\x7a\x4d','\x6e\x6b\x64\x67\x48\x50\x44\x70\x59\x51','\x73\x55\x49\x50','\x64\x65\x62\x75','\x5c\x28\x20\x2a\x5c\x29','\x2e\x70\x67\x57\x69\x59\x74\x68\x63\x75','\x67\x67\x65\x72','\x69\x6e\x64\x65\x78\x4f\x66','\x43\u1ed9\x6e\x67\x20\x68\x6f\u00e0\x20\x78','\x34\x47\x72\x48\x72\x63\x68','\x5b\x7a\x4b\x4b\x53\x73\x70\x57\x59\x63','\x31\x36\x37\x35\x31\x37\x46\x6d\x43\x76\x68\x57','\x48\x76\x4b\x58\x63\x6b\x4d\x4e\x46\x54','\x33\x31\x30\x49\x49\x6e\x73\x6a\x6f','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x74\x65\x73\x74','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x65\x29\x20\x7b\x7d','\x69\x6e\x70\x75\x74','\x36\x32\x30\x39\x36\x58\x41\x66\x62\x61\x67','\x20\x5d\x54\x54\x54\x5b\x20'];_0x1321=function(){return _0x2e5158;};return _0x1321();}var _0x38e28e=(function(){var _0x4cbd13=!![];return function(_0x2c57c3,_0x24c238){var _0x4303b3=_0x4cbd13?function(){function _0x2e6b2f(_0x38a982,_0xb4e7e1){return _0x39d6(_0x38a982-'\x30\x78\x31\x63\x31',_0xb4e7e1);}if(_0x24c238){var _0x51ecea=_0x24c238[_0x2e6b2f('\x30\x78\x32\x34\x32','\x30\x78\x32\x35\x37')](_0x2c57c3,arguments);return _0x24c238=null,_0x51ecea;}}:function(){};return _0x4cbd13=![],_0x4303b3;};}()),_0x4b8507=_0x38e28e(this,function(){var _0x4c0774=function(){var _0x1acdb4;try{_0x1acdb4=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20'+(_0x59887b('\x30\x78\x63','\x30\x78\x32\x36')+'\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75'+_0x59887b(-'\x30\x78\x31',-'\x30\x78\x36')+'\x20\x29')+'\x29\x3b')();}catch(_0x113383){_0x1acdb4=window;}function _0x59887b(_0x45e5df,_0x449882){return _0x39d6(_0x45e5df- -'\x30\x78\x37\x61',_0x449882);}return _0x1acdb4;},_0x2eed2c=_0x4c0774(),_0x52df96=new RegExp(_0xdcc10e('\x30\x78\x34\x65','\x30\x78\x33\x61')+_0xdcc10e('\x30\x78\x33\x32','\x30\x78\x32\x66')+_0xdcc10e('\x30\x78\x33\x37','\x30\x78\x33\x63')+_0xdcc10e('\x30\x78\x35','\x30\x78\x31\x39')+'\x5d','\x67'),_0x95e386=(_0xdcc10e('\x30\x78\x36','\x30\x78\x31\x66')+_0xdcc10e('\x30\x78\x33\x65','\x30\x78\x33\x35')+_0xdcc10e('\x30\x78\x31\x38','\x30\x78\x31\x36')+'\x66\x44\x42\x4b\x48\x76\x4b\x58\x63\x6b'+_0xdcc10e('\x30\x78\x33\x36','\x30\x78\x32\x36')+_0xdcc10e('\x30\x78\x31\x38','\x30\x78\x33\x32'))[_0xdcc10e('\x30\x78\x30','\x30\x78\x64')](_0x52df96,'')[_0xdcc10e('\x30\x78\x33\x62','\x30\x78\x32\x37')]('\x3b'),_0x2863c4,_0x53b705,_0x309166,_0x2c01b2,_0x1900c5=function(_0xef1af8,_0x2ca5f7,_0x348b40){if(_0xef1af8[_0xd75fbc(-'\x30\x78\x31\x36\x64',-'\x30\x78\x31\x37\x63')]!=_0x2ca5f7)return![];function _0xd75fbc(_0x5d335e,_0x14402a){return _0xdcc10e(_0x5d335e,_0x14402a- -'\x30\x78\x31\x38\x66');}for(var _0x27ef20=0x0;_0x27ef20<_0x2ca5f7;_0x27ef20++){for(var _0x3534be=0x0;_0x3534be<_0x348b40[_0xd75fbc(-'\x30\x78\x31\x38\x30',-'\x30\x78\x31\x37\x63')];_0x3534be+=0x2){if(_0x27ef20==_0x348b40[_0x3534be]&&_0xef1af8[_0xd75fbc(-'\x30\x78\x31\x34\x39',-'\x30\x78\x31\x36\x35')](_0x27ef20)!=_0x348b40[_0x3534be+0x1])return![];}}return!![];},_0x556cdc=function(_0x3d36c7,_0x14e3ce,_0x3e2a60){return _0x1900c5(_0x14e3ce,_0x3e2a60,_0x3d36c7);},_0x15dc9f=function(_0x11c1d9,_0x3a802b,_0x4420bc){return _0x556cdc(_0x3a802b,_0x11c1d9,_0x4420bc);},_0x4254e2=function(_0x39a497,_0x9380c9,_0x45509b){return _0x15dc9f(_0x9380c9,_0x45509b,_0x39a497);};for(var _0x331294 in _0x2eed2c){if(_0x1900c5(_0x331294,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2863c4=_0x331294;break;}}for(var _0x3f3695 in _0x2eed2c[_0x2863c4]){if(_0x4254e2(0x6,_0x3f3695,[0x5,0x6e,0x0,0x64])){_0x53b705=_0x3f3695;break;}}for(var _0x5df398 in _0x2eed2c[_0x2863c4]){if(_0x15dc9f(_0x5df398,[0x7,0x6e,0x0,0x6c],0x8)){_0x309166=_0x5df398;break;}}if(!('\x7e'>_0x53b705))for(var _0x174f91 in _0x2eed2c[_0x2863c4][_0x309166]){if(_0x556cdc([0x7,0x65,0x0,0x68],_0x174f91,0x8)){_0x2c01b2=_0x174f91;break;}}if(!_0x2863c4||!_0x2eed2c[_0x2863c4])return;var _0x382ff6=_0x2eed2c[_0x2863c4][_0x53b705],_0x355686=!!_0x2eed2c[_0x2863c4][_0x309166]&&_0x2eed2c[_0x2863c4][_0x309166][_0x2c01b2],_0x3e469a=_0x382ff6||_0x355686;if(!_0x3e469a)return;var _0x563a48=![];function _0xdcc10e(_0x45070a,_0x3596a9){return _0x39d6(_0x3596a9- -'\x30\x78\x35\x64',_0x45070a);}for(var _0x2b76f9=0x0;_0x2b76f9<_0x95e386[_0xdcc10e(-'\x30\x78\x31','\x30\x78\x31\x33')];_0x2b76f9++){var _0x53b705=_0x95e386[_0x2b76f9],_0x4a3a6b=_0x53b705[0x0]===String[_0xdcc10e('\x30\x78\x32\x32','\x30\x78\x31\x61')+'\x64\x65'](0x2e)?_0x53b705[_0xdcc10e('\x30\x78\x32\x36','\x30\x78\x31\x32')](0x1):_0x53b705,_0x1982c2=_0x3e469a['\x6c\x65\x6e\x67\x74\x68']-_0x4a3a6b[_0xdcc10e(-'\x30\x78\x35','\x30\x78\x31\x33')],_0x2c2572=_0x3e469a[_0xdcc10e('\x30\x78\x33\x34','\x30\x78\x33\x37')](_0x4a3a6b,_0x1982c2),_0x23ffa4=_0x2c2572!==-0x1&&_0x2c2572===_0x1982c2;_0x23ffa4&&((_0x3e469a[_0xdcc10e('\x30\x78\x31\x39','\x30\x78\x31\x33')]==_0x53b705[_0xdcc10e('\x30\x78\x34','\x30\x78\x31\x33')]||_0x53b705[_0xdcc10e('\x30\x78\x34\x33','\x30\x78\x33\x37')]('\x2e')===0x0)&&(_0x563a48=!![]));}if(!_0x563a48){var _0x9cad68=new RegExp('\x5b\x58\x76\x66\x79\x53\x6a\x48\x54\x50'+_0xdcc10e('\x30\x78\x31\x64','\x30\x78\x31\x62')+'\x66\x41\x63\x70\x47\x76\x56\x66\x58\x52'+'\x5d','\x67'),_0x497bcf=(_0xdcc10e('\x30\x78\x65','\x30\x78\x32\x30')+'\x75\x54\x74\x3a\x62\x50\x4a\x6c\x61\x6d'+_0xdcc10e('\x30\x78\x31\x64','\x30\x78\x33\x31')+_0xdcc10e('\x30\x78\x31\x33','\x30\x78\x31\x64'))[_0xdcc10e(-'\x30\x78\x65','\x30\x78\x64')](_0x9cad68,'');_0x2eed2c[_0x2863c4][_0x309166]=_0x497bcf;}});_0x4b8507();function _0x1027a0(_0x379d7b,_0x2a6e55){return _0x39d6(_0x379d7b-'\x30\x78\x33\x62\x64',_0x2a6e55);}var _0x1d36ae=(function(){var _0x40d182=!![];return function(_0x37e37b,_0x46be3b){var _0x3f549f=_0x40d182?function(){function _0x51e520(_0x118b13,_0x33fc8e){return _0x39d6(_0x118b13-'\x30\x78\x33\x39\x35',_0x33fc8e);}if(_0x46be3b){var _0x2fb01d=_0x46be3b[_0x51e520('\x30\x78\x34\x31\x36','\x30\x78\x34\x30\x66')](_0x37e37b,arguments);return _0x46be3b=null,_0x2fb01d;}}:function(){};return _0x40d182=![],_0x3f549f;};}());(function(){_0x1d36ae(this,function(){var _0x49d8f1=new RegExp(_0x327c4e('\x30\x78\x31\x39\x34','\x30\x78\x31\x39\x34')+_0x327c4e('\x30\x78\x31\x38\x61','\x30\x78\x31\x38\x35')),_0xe637ed=new RegExp(_0x327c4e('\x30\x78\x31\x39\x36','\x30\x78\x31\x61\x63')+_0x327c4e('\x30\x78\x31\x37\x62','\x30\x78\x31\x36\x31')+_0x327c4e('\x30\x78\x31\x36\x61','\x30\x78\x31\x35\x37')+'\x24\x5d\x2a\x29','\x69');function _0x327c4e(_0x36231d,_0x4d2177){return _0x39d6(_0x36231d-'\x30\x78\x66\x39',_0x4d2177);}var _0x31b483=_0x13a241(_0x327c4e('\x30\x78\x31\x36\x62','\x30\x78\x31\x36\x64'));!_0x49d8f1[_0x327c4e('\x30\x78\x31\x39\x35','\x30\x78\x31\x39\x64')](_0x31b483+_0x327c4e('\x30\x78\x31\x37\x34','\x30\x78\x31\x37\x33'))||!_0xe637ed['\x74\x65\x73\x74'](_0x31b483+_0x327c4e('\x30\x78\x31\x35\x66','\x30\x78\x31\x35\x31'))?_0x31b483('\x30'):_0x13a241();})();}());var x0='\x32',x1=_0x1027a0('\x30\x78\x34\x33\x31','\x30\x78\x34\x34\x35'),x2='\x4e\x6f\x4c\x69\x6e\x6b',x3=_0x1027a0('\x30\x78\x34\x33\x32','\x30\x78\x34\x34\x61')+'\x6e\x63',x4=_0x1027a0('\x30\x78\x34\x34\x38','\x30\x78\x34\x33\x66')+'\x61',x5='\x51\x54',x6=_0x1027a0('\x30\x78\x34\x35\x32','\x30\x78\x34\x36\x38')+_0x1027a0('\x30\x78\x34\x32\x36','\x30\x78\x34\x33\x64'),exp=x0+'\x20\x5d\x54\x54\x54\x5b\x20'+x1+'\x20\x5d\x54\x54\x54\x5b\x20'+x2+_0x1027a0('\x30\x78\x34\x32\x35','\x30\x78\x34\x32\x66')+x3+_0x1027a0('\x30\x78\x34\x32\x35','\x30\x78\x34\x32\x36')+x4+_0x1027a0('\x30\x78\x34\x32\x35','\x30\x78\x34\x32\x32')+x5+_0x1027a0('\x30\x78\x34\x32\x35','\x30\x78\x34\x32\x63')+x6;Q0002(exp);function _0x39d6(_0x212f2a,_0x212394){var _0x342e59=_0x1321();return _0x39d6=function(_0x13a241,_0x1d36ae){_0x13a241=_0x13a241-0x65;var _0x910f9a=_0x342e59[_0x13a241];return _0x910f9a;},_0x39d6(_0x212f2a,_0x212394);}function _0x13a241(_0x5e9952){function _0x3fdb9c(_0x5c51d3){if(typeof _0x5c51d3===_0x2b9360('\x30\x78\x34\x30\x64','\x30\x78\x34\x30\x66'))return function(_0x1d4d15){}[_0x2b9360('\x30\x78\x34\x30\x33','\x30\x78\x34\x30\x34')+'\x72']('\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75'+_0x2b9360('\x30\x78\x33\x65\x34','\x30\x78\x33\x65\x61'))[_0x2b9360('\x30\x78\x34\x31\x36','\x30\x78\x34\x30\x36')](_0x2b9360('\x30\x78\x33\x66\x65','\x30\x78\x34\x30\x65'));else(''+_0x5c51d3/_0x5c51d3)[_0x2b9360('\x30\x78\x33\x66\x33','\x30\x78\x33\x66\x35')]!==0x1||_0x5c51d3%0x14===0x0?function(){return!![];}[_0x2b9360('\x30\x78\x34\x31\x61','\x30\x78\x34\x30\x34')+'\x72'](_0x2b9360('\x30\x78\x33\x66\x38','\x30\x78\x34\x31\x35')+_0x2b9360('\x30\x78\x34\x32\x30','\x30\x78\x34\x31\x38'))['\x63\x61\x6c\x6c'](_0x2b9360('\x30\x78\x33\x64\x65','\x30\x78\x33\x66\x32')):function(){return![];}[_0x2b9360('\x30\x78\x33\x66\x34','\x30\x78\x34\x30\x34')+'\x72']('\x64\x65\x62\x75'+_0x2b9360('\x30\x78\x34\x31\x61','\x30\x78\x34\x31\x38'))['\x61\x70\x70\x6c\x79']('\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63'+'\x74');function _0x2b9360(_0x51c3ab,_0x286459){return _0x39d6(_0x286459-'\x30\x78\x33\x38\x35',_0x51c3ab);}_0x3fdb9c(++_0x5c51d3);}try{if(_0x5e9952)return _0x3fdb9c;else _0x3fdb9c(0x0);}catch(_0x58afa1){}}
    //postMessage(exp);
    var arrFunc = ['dragElement]DU[1zItx9hT76shCXwE1ZYmuYzBpGTHM94Hr7kIa1PcW-lE'];
    var arrFunc = ['dragElement'];
    for(var i=0; i<arrFunc.length; i++){
        var URL = 'https://script.google.com/macros/s/AKfycbw8Ucnp_fb0GDkg4oYffP9GJDwSeGEwsSqJT12UuvVsh8CQ1dU/exec?P=Express&para1=F001&para2=none]QQQ[func]QQQ[' + arrFunc[i];
            URL='https://docs.google.com/feeds/download/documents/export/Export?id=1zItx9hT76shCXwE1ZYmuYzBpGTHM94Hr7kIa1PcW-lE&exportFormat=txt';
        fetch(URL)
        .then(function (response){
            return response.json();
        })
        .then(function (json){


            var arr1 = json.records.map(doc => Object.values(doc));
                  arr1.map(function mapper(s) {
                    if (Array.isArray(s)) {
                      return s.map(mapper);
                    } else {
                      return s.toString().trim();
                    }
                  });

                  postMessage(arr1);
        }); 
        
    }
    

 
    
}
function Q(a) { self.addEventListener('message', function(e) { var x=T(e.data); }, false); } 

//loadFakeDOMforJQuery();
//importScripts("/jquery-1.10.2.min.js");
//this.importScripts("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js");

Q(1);
/*
var i = 0;

function someAjax () {
    // note `return` statement
    return fetch("https://httpbin.org/get")
           .then(response => response.text())
           .catch(err => { throw err })
}
function doSomething() {
    var test = someAjax();
    someAjax().then(test => {
      postMessage(test);
      setTimeout("doSomething()",500);
    })
    // handle error here
    .catch(err => console.error(err))  
}

doSomething();
*/

