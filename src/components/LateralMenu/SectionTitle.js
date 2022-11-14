function SectionTitle({ isOpen, title }) {
    return (
        <h3 className="text-slate-700 text-sm font-medium customTransition mb-1 text-center" style={{ opacity: isOpen ? '1' : '0' }}>{ title }</h3>
    )
}

export default SectionTitle;