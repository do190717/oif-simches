export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-[#1a1f3a] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#d4af37]">אויף שימחעס</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="hover:text-[#d4af37] transition-colors">דף הבית</a>
              <a href="#gallery" className="hover:text-[#d4af37] transition-colors">גלריה</a>
              <a href="#about" className="hover:text-[#d4af37] transition-colors">אודות</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-[#1a1f3a] to-[#2a3f5a] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            מודעות והזמנות מעוצבות
            <span className="block text-[#d4af37] mt-2">לכל אירוע ושמחה!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            מבר/בת מצווה ועד חתונות יוקרתיות - צור מודעות מקצועיות תוך דקות
            <span className="block mt-2">בחר תבנית, התאם אישית, והורד מיד!</span>
          </p>
          <button className="bg-[#d4af37] hover:bg-[#c4a027] text-[#1a1f3a] font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            התחל לעצב עכשיו ←
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-[#1a1f3a] mb-4">
            בחר את סוג האירוע שלך
          </h3>
          <p className="text-center text-slate-600 text-lg mb-16">
            מגוון רחב של עיצובים מקצועיים לכל סוג של שמחה ואירוע
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category Card 1 */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#d4af37] to-[#c4a027] flex items-center justify-center">
                <span className="text-6xl">🎉</span>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#1a1f3a] mb-2">בר/בת מצווה</h4>
                <p className="text-slate-600 mb-4">
                  עיצובים מיוחדים ומרשימים לשמחת הבר/בת מצווה
                </p>
                <button className="text-[#d4af37] font-semibold hover:text-[#c4a027] transition-colors">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#1a1f3a] to-[#2a3f5a] flex items-center justify-center">
                <span className="text-6xl">💍</span>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#1a1f3a] mb-2">חתונות</h4>
                <p className="text-slate-600 mb-4">
                  הזמנות אלגנטיות ויוקרתיות לאירוע הכי חשוב
                </p>
                <button className="text-[#d4af37] font-semibold hover:text-[#c4a027] transition-colors">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                <span className="text-6xl">🕍</span>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#1a1f3a] mb-2">אירועי בית כנסת</h4>
                <p className="text-slate-600 mb-4">
                  מודעות מכובדות לקידוש, שלום זכור, הכנסת ס"ת ועוד
                </p>
                <button className="text-[#d4af37] font-semibold hover:text-[#c4a027] transition-colors">
                  צפה בתבניות ←
                </button>
              </div>
            </div>

            {/* Category Card 4 */}
            <div className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <span className="text-6xl">🎊</span>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-[#1a1f3a] mb-2">אירועים כלליים</h4>
                <p className="text-slate-600 mb-4">
                  יום הולדת, אירועי חברה, מסיבות ועוד
                </p>
                <button className="text-[#d4af37] font-semibold hover:text-[#c4a027] transition-colors">
                  צפה בתבניות ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-[#1a1f3a] mb-16">
            למה לבחור באויף שימחעס?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h4 className="text-2xl font-bold text-[#1a1f3a] mb-3">מהיר וקל</h4>
              <p className="text-slate-600 text-lg">
                תוך דקות בודדות תקבל מודעה מקצועית ומעוצבת - ללא צורך בידע גרפי
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎨</span>
              </div>
              <h4 className="text-2xl font-bold text-[#1a1f3a] mb-3">עיצובים מקצועיים</h4>
              <p className="text-slate-600 text-lg">
                כל התבניות עוצבו על ידי מעצבים מקצועיים - תוצאות ברמה הגבוהה ביותר
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💎</span>
              </div>
              <h4 className="text-2xl font-bold text-[#1a1f3a] mb-3">התאמה אישית</h4>
              <p className="text-slate-600 text-lg">
                שנה טקסטים, צבעים ופרטים - התבנית תתאים בדיוק לאירוע שלך
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-l from-[#1a1f3a] to-[#2a3f5a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            מוכנים ליצור את המודעה המושלמת?
          </h3>
          <p className="text-xl mb-10 text-slate-200">
            הצטרף לאלפי לקוחות מרוצים שכבר יצרו את המודעות שלהם אצלנו
          </p>
          <button className="bg-[#d4af37] hover:bg-[#c4a027] text-[#1a1f3a] font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            צור מודעה עכשיו - זה חינם לנסות!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-[#d4af37] mb-4">אויף שימחעס</h4>
              <p className="text-slate-300">
                המקום שלך ליצירת מודעות והזמנות מקצועיות לכל אירוע
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">קישורים</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">דף הבית</a></li>
                <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">גלריה</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">תמחור</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">צור קשר</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">יצירת קשר</h5>
              <p className="text-slate-300">
                info@oifsimches.com<br />
                03-1234567
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2025 אויף שימחעס - כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>
    </div>
  );
}