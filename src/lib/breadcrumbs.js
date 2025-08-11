
export function generateBreadcrumbs(pathname) {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs = [
        { label: 'Browse', href: '/browse' }
    ]
    let currentPath = ''
    for (let i = 0; i < segments.length; i++) {
        currentPath += `/${segments[i]}`
        const segment = segments[i];
        const label = segment.toUpperCase();

        breadcrumbs.push({
            label,
            href: currentPath
        })
    }

    return breadcrumbs;
}