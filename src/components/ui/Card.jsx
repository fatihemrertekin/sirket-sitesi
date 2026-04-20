export default function Card({ title, description, icon }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300">
      {/* İkon */}
      {icon && (
        <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-semibold text-primary-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
