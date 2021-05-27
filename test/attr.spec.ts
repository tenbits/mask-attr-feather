import * as feather from '/node_modules/feather-icons/dist/feather.js'
import '../src/export'

window.feather = feather;

UTest({
    'render' () {
        let el = mask.render(`div > i data-feather="circle"`);
        eq_(el.children[0].tagName, 'svg');

        let el2 = mask.render(`div > i data-feather="circle"`);
        eq_(el2.children[0].tagName, 'svg');
    },
})
