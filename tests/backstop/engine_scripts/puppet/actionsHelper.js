module.exports = async (page, scenario) => {

    function querySelectorThroughShadowDom(selectorChain) {
        if (typeof selectorChain === 'string') {
            selectorChain = selectorChain.split(/\s+>>>\s+/);
        }
        return selectorChain.reduce((el, sel) => (el ? el.shadowRoot : document).querySelector(sel), undefined);
    }

    async function getElementThroughShadowDom(selectorChain) {
        await page.waitForFunction(querySelectorThroughShadowDom, {}, selectorChain);
        return await page.evaluateHandle(querySelectorThroughShadowDom, selectorChain);
    }

    if (scenario.actions !== undefined) {
        let i, len, action;
        for (i=0, len=scenario.actions.length; i < len; i++) {
            action = scenario.actions[i];
            if (action.click !== undefined) {
                const elem = await getElementThroughShadowDom(action.click);
                await elem.click();
            }
            if (action.hover !== undefined) {
                const elem = await getElementThroughShadowDom(action.hover);
                await elem.hover();
            }
            if (action.wait !== undefined) {
                await page.waitFor(action.wait);
            }
        }
    }
};
