const packages = [
    { name: 'featureA', dependencies: ['button'] },
    { name: 'button', dependencies: [] },
    { name: 'checkbox', dependencies: ['input'] },
    { name: 'input', dependencies: [] },
    { name: 'featureB', dependencies: [] },
    { name: 'featureC', dependencies: ['button', 'checkbox'] },
]

function getDependencies(packages, tag = 'feature') {
    let res = []
    packages.forEach(element => {
        let item = []
        if (element.name.includes(tag)) {
            if (tag === 'feature') item.push(element.name, ...element.dependencies)
            for (let dependency of element.dependencies) {
                if (dependency === tag) return item
                return getDependencies(packages, dependency) // ?
            }
        }
        if (item.length > 0) res.push(item)
    });

    return res
}

console.log(getDependencies(packages))
