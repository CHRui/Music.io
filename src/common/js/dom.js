
// 给 children 添加样式
export function addClass(el,className){
    // console.log(hasClass(el,className))
    if(hasClass(el,className)){
        return
    }
    // console.log(hasClass(el,className))
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// 检查被选元素是否包含指定的 class
export function hasClass(el,className){
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el,className)
}