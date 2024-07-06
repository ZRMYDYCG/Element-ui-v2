/** 
 *BEM规范是一种CSS类名命名方法，它将页面元素分为三个部分：
 * - Block: 一个独立的组件或模块，具有自己的功能。
 * - Element: Block内部的一部分，依赖于Block。
 * - Modifier: 用于修改Block或Element的属性或状态。
 * 
 *此外，BEM规范还支持状态（state）的表示，如：
 * - is-checked: 表示元素被选中。
 * - is-enabled: 表示元素可用。
*/

/**
 * 私有函数 _bem
 * 用于构建符合BEM命名规范的类名。
 * 
 * @param {string} prefixName - 命名空间的前缀，通常对应于Block的名称。
 * @param {string} blockSuffix - 可选的Block后缀，用于区分同一Block的不同部分。
 * @param {string} element - 可选的Element名称，表示Block内部的一个特定部分。
 * @param {string} modifier - 可选的Modifier名称，用于表示Block或Element的不同状态或变体。
 * @returns {string} 根据BEM规范构建的类名。
 * @private
 */
function _bem(prefixName, blockSuffix, element, modifier) {
    if(blockSuffix) {
        prefixName += `-${blockSuffix}`
    }
    if(element) {
        prefixName += `__${element}`
    }
    if(modifier) {
        prefixName += `--${modifier}`
    }
    
    return prefixName
}

/**
 * createBEM 函数
 * 创建一个BEM命名函数集合，用于快速生成BEM类名。
 * 
 * @param {string} prefixName - 命名空间的前缀，通常对应于Block的名称。
 * @returns {Object} 包含以下方法的对象：
 * - b(blockSuffix?: string): string - 生成Block类名。
 * - e(element: string): string - 生成Element类名。
 * - m(modifier: string): string - 生成Modifier类名。
 * - be(blockSuffix: string, element: string): string - 生成Block和Element的组合类名。
 * - bm(blockSuffix: string, modifier: string): string - 生成Block和Modifier的组合类名。
 * - em(element: string, modifier: string): string - 生成Element和Modifier的组合类名。
 * - bem(blockSuffix: string, element: string, modifier: string): string - 生成完整的Block, Element, Modifier类名。
 * - is(name: string, state: boolean): string - 根据布尔状态生成状态类名。
 */
function createBEM(prefixName) {
    const b = (blockSuffix = '') => _bem(prefixName, blockSuffix, '', '')
    const e = (element = '') => element ? _bem(prefixName, '', element, '') : ''
    const m = (modifier = '') => modifier ? _bem(prefixName, '', '', modifier) : ''
    const be = (blockSuffix = '', element = '') => blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
    const bm = (blockSuffix = '', modifier = '') => blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
    const em = (element = '', modifier = '') => element && modifier ? _bem(prefixName, '', element, modifier) : ''
    const bem = (blockSuffix = '' , element = '', modifier = '') => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''
    const is = (name, state) => state ? `is-${name}` : ''

    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is
    }
}

/**
 * createNamespace 函数
 * 根据提供的名称创建一个BEM命名空间，并返回相应的BEM命名函数集合。
 * 
 * @param {string} name - 用于构建命名空间前缀的名称。
 * @returns {Object} 包含BEM命名方法的对象。
 */
export function createNamespace(name) {
    const prefixName = `el-${name}`
    return createBEM(prefixName)
}


/*
测试代码示例:
    创建一个名为 "icon" 的BEM命名空间
    const bem = createNamespace("icon");
测试输出:
    console.log(bem.b('box')); // 输出: "p-icon-box"
    console.log(bem.e('element')); // 输出: "p-icon__element"
    console.log(bem.m('modifier')); // 输出: "p-icon--modifier"
    console.log(bem.be('box', 'element')); // 输出: "p-icon-box__element"
    console.log(bem.bm('box', 'modifier')); // 输出: "p-icon-box--modifier"
    console.log(bem.em('element', 'modifier')); // 输出: "p-icon__element--modifier"
    console.log(bem.bem('box', 'element', 'modifier')); // 输出: "p-icon-box__element--modifier"
    console.log(bem.is('ischecked', true)); // 输出: "is-ischecked"
*/