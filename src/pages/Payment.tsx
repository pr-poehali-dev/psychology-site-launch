import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Icon from '@/components/ui/icon';

declare global {
  interface Window {
    cpay: any;
  }
}

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    
    // Открываем ссылку PayMaster в новой вкладке
    window.open('https://paymaster.ru/cpay/00fa46a9-0be5-4537-8584-9f60e05e350b/', '_blank');
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-secondary-50">
      {/* Навигация */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-warm-600 hover:text-warm-700 transition-colors mb-6"
        ></button>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-warm-800 mb-4"></h1>
            <p className="text-lg text-warm-600"></p>
          </div>

          {/* Карточка оплаты */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-warm-600" />
              </div>
              <h2 className="font-semibold mb-2 text-6xl text-violet-700">
                MindCare
              </h2>
              <p className="text-warm-600"></p>
            </div>

            {/* Информация об услугах */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-warm-50 rounded-lg">
                <h3 className="font-semibold text-warm-800 mb-1"></h3>
                <p className="text-warm-600"></p>
              </div>
              <div className="text-center p-4 bg-warm-50 rounded-lg">
                <h3 className="font-semibold text-warm-800 mb-1"></h3>
                <p className="text-warm-600"></p>
              </div>
              <div className="text-center p-4 bg-warm-50 rounded-lg">
                <h3 className="font-semibold text-warm-800 mb-1"></h3>
                <p className="text-warm-600"></p>
              </div>
            </div>

            {/* Кнопка оплаты */}
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-1/2 mx-auto hover:bg-warm-700 disabled:opacity-50 text-white py-4 text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 rounded-3xl px-[15px] bg-indigo-600"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Загрузка...
                </>
              ) : (
                <>
                  <Icon name="CreditCard" size={20} />
                  Перейти к оплате
                </>
              )}
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Payment;