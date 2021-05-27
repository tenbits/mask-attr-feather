declare var feather;

export const FeatherAttr = function (node, key, model, ctx, element: HTMLElement) {

    const elementAttrs = node.attr;
    const name = elementAttrs['data-feather'];

    const svgString = feather.icons[name].toSvg({
        ...elementAttrs,
        class: elementAttrs.class,
    });
    const svgDocument = new DOMParser().parseFromString(
        svgString,
        'image/svg+xml',
    );
    const svgElement = svgDocument.querySelector('svg');

    element.parentNode.replaceChild(svgElement, element);
}

mask.registerAttrHandler('data-feather', 'client', FeatherAttr);
