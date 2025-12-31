export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-l from-[#1a1f3a] via-[#2a3f5a] to-[#1a1f3a] text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] font-rubik animate-pulse">
              אויף שימחעס ✨
            </h1>
            <nav className="hidden md:flex gap-8 font-assistant">
              <a href="#" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium">דף הבית</a>
              <a href="#gallery" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium">גלריה</a>
              <a href="#about" className="hover:text-[#d4af37] transition-all hover:scale-110 font-medium">אודות</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1f3a] via-[#2a3f5a] to-[#3a4f6a] text-white py-24 md:py-32 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#d4af37] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#f4d03f] rounded-full opacity-10 blur-3xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-bounce inline-block">🎉</span>
            <span className="text-6xl animate-bounce inline-block delay-100">✨</span>
            <span className="text-6xl animate-bounce inline-block delay-200">🎊</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight font-rubik">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white">
              מודעות והזמנות
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] mt-2 animate-pulse">
              מעוצבות וזורחות!
            </span>
          </h2>
          
          <p className="text-xl md:text-3xl mb-10 text-slate-200 max-w-4xl mx-auto leading-relaxed font-assistant font-light">
            מבר/בת מצווה ועד חתונות יוקרתיות - צור מודעות <span className="font-bold text-[#f4d03f]">מקצועיות ומרהיבות</span> תוך דקות
            <span className="block mt-2 text-2xl">✨ בחר תבנית • התאם אישית • הורד מיד! ✨</span>
          </p>
          
          <button className="group relative bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#1a1f3a] font-black text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 font-rubik">
            <span className="relative z-10">התחל לעצב עכשיו ←</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-5xl">🎨</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a1f3a] to-[#2a3f5a] mb-4 font-rubik">
            בחר את סוג האירוע שלך
          </h3>
          <p className="text-center text-slate-600 text-xl mb-16 font-assistant">
            מגוון רחב של עיצובים מקצועיים לכל סוג של שמחה ואירוע ✨
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category Card 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-transparent hover:border-[#d4af37]">
              <div className="h-52 bg-gradient-to-br from-[#d4af37] via-[#f4d03f] to-[#ffed4e] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">🎉</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">בר/בת מצווה</h4>
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  עיצובים מיוחדים ומרשימים לשמחת הבר/בת מצווה שלכם! 🌟
                </p>
                <button className="text-[#d4af37] font-bold hover:text-[#c4a027] transition-all hover:scale-105 font-rubik text-lg">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-transparent hover:border-[#1a1f3a]">
              <div className="h-52 bg-gradient-to-br from-[#1a1f3a] via-[#2a3f5a] to-[#3a4f6a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">💍</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">חתונות</h4>
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  הזמנות אלגנטיות ויוקרתיות לאירוע הכי חשוב בחיים! 💎
                </p>
                <button className="text-[#1a1f3a] font-bold hover:text-[#2a3f5a] transition-all hover:scale-105 font-rubik text-lg">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-transparent hover:border-slate-600">
              <div className="h-52 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">🕍</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">אירועי בית כנסת</h4>
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  מודעות מכובדות לקידוש, שלום זכור, הכנסת ס"ת ועוד 📖
                </p>
                <button className="text-slate-700 font-bold hover:text-slate-900 transition-all hover:scale-105 font-rubik text-lg">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 4 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-4 border-transparent hover:border-emerald-500">
              <div className="h-52 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">🎊</span>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">אירועים כלליים</h4>
                <p className="text-slate-600 mb-4 font-assistant leading-relaxed">
                  יום הולדת, אירועי חברה, מסיבות ועוד הרבה! 🎈
                </p>
                <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-all hover:scale-105 font-rubik text-lg">
                  צפה בתבניות ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1a1f3a] to-[#d4af37] mb-16 font-rubik">
            למה לבחור באויף שימחעס? 🌟
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow">
                <span className="text-5xl group-hover:scale-110 transition-transform">⚡</span>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">מהיר וקל</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                תוך דקות בודדות תקבל מודעה מקצועית ומעוצבת - ללא צורך בידע גרפי! 🚀
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow">
                <span className="text-5xl group-hover:scale-110 transition-transform">🎨</span>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">עיצובים מקצועיים</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                כל התבניות עוצבו על ידי מעצבים מקצועיים - תוצאות ברמה הגבוהה ביותר! ✨
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow">
                <span className="text-5xl group-hover:scale-110 transition-transform">💎</span>
              </div>
              <h4 className="text-3xl font-black text-[#1a1f3a] mb-3 font-rubik">התאמה אישית</h4>
              <p className="text-slate-600 text-lg font-assistant leading-relaxed">
                שנה טקסטים, צבעים ופרטים - התבנית תתאים בדיוק לאירוע שלך! 🎯
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a1f3a] via-[#2a3f5a] to-[#3a4f6a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4d03f] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-6xl inline-block animate-bounce">🎊</span>
            <span className="text-6xl inline-block animate-bounce delay-100">✨</span>
            <span className="text-6xl inline-block animate-bounce delay-200">🎉</span>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-black mb-6 font-rubik text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white">
            מוכנים ליצור את המודעה המושלמת?
          </h3>
          <p className="text-2xl mb-10 text-slate-200 font-assistant">
            הצטרף לאלפי לקוחות מרוצים שכבר יצרו את המודעות המדהימות שלהם אצלנו! 🌟
          </p>
          <button className="group relative bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#1a1f3a] font-black text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 font-rubik">
            <span className="relative z-10">צור מודעה עכשיו - זה חינם לנסות! ✨</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mb-4 font-rubik">אויף שימחעס ✨</h4>
              <p className="text-slate-300 font-assistant leading-relaxed">
                המקום שלך ליצירת מודעות והזמנות מקצועיות לכל אירוע ושמחה!
              </p>
            </div>
            <div>
              <h5 className="font-black text-xl mb-4 font-rubik">קישורים מהירים</h5>
              <ul className="space-y-2 text-slate-300 font-assistant">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">דף הבית</a></li>
                <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">גלריה</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">תמחור</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-xl mb-4 font-rubik">יצירת קשר</h5>
              <p className="text-slate-300 font-assistant leading-relaxed">
                📧 info@oifsimches.com<br />
                📞 03-1234567
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 font-assistant">
            <p>© 2025 אויף שימחעס - כל הזכויות שמורות ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}