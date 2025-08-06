import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [capsuleData, setCapsuleData] = useState({
    title: '',
    message: '',
    deliveryDate: '',
    email: ''
  });

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '299₽',
      period: '/месяц',
      features: ['5 капсул в месяц', 'Текстовые сообщения', 'Email уведомления', 'Хранение 1 год']
    },
    {
      id: 'pro',
      name: 'Профи',
      price: '599₽',
      period: '/месяц',
      features: ['20 капсул в месяц', 'Фото и видео', 'SMS уведомления', 'Хранение 5 лет', 'Приоритетная доставка']
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '999₽',
      period: '/месяц',
      features: ['Неограниченные капсулы', 'Все типы контента', 'Физическая доставка', 'Пожизненное хранение', '24/7 поддержка']
    }
  ];

  const capsules = [
    { id: 1, title: 'Моя мечта', date: '2025-12-31', status: 'pending' },
    { id: 2, title: 'Детские воспоминания', date: '2026-06-15', status: 'active' },
    { id: 3, title: 'Письмо себе в будущее', date: '2024-08-15', status: 'delivered' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Icon name="Clock" className="text-white" size={20} />
              </div>
              <h1 className="text-xl font-montserrat font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                TimeVault
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-open-sans transition-colors">Главная</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-open-sans transition-colors">Тарифы</a>
              <a href="#create" className="text-gray-700 hover:text-indigo-600 font-open-sans transition-colors">Создать</a>
              <a href="#gallery" className="text-gray-700 hover:text-indigo-600 font-open-sans transition-colors">Галерея</a>
              <a href="#contacts" className="text-gray-700 hover:text-indigo-600 font-open-sans transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-10 animate-gradient-x"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6">
              Сохрани <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">момент</span>
              <br />для будущего
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-open-sans max-w-2xl mx-auto">
              Создай цифровую капсулу времени с твоими воспоминаниями, мечтами и посланиями. 
              Получи их точно в назначенное время.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3">
                <Icon name="Plus" className="mr-2" size={20} />
                Создать капсулу
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
              <Icon name="Archive" className="text-white" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Выберите свой план
            </h3>
            <p className="text-gray-600 font-open-sans">
              Гибкие тарифы для любых потребностей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                  selectedPlan === plan.id ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                } ${plan.id === 'pro' ? 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.id === 'pro' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center font-open-sans text-gray-600">
                        <Icon name="Check" className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      plan.id === 'pro' 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' 
                        : selectedPlan === plan.id 
                          ? 'bg-indigo-600 hover:bg-indigo-700' 
                          : ''
                    }`}
                    variant={selectedPlan === plan.id || plan.id === 'pro' ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Create Capsule Section */}
      <section id="create" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Создать капсулу времени
            </h3>
            <p className="text-gray-600 font-open-sans">
              Заполните форму и отправьте послание в будущее
            </p>
          </div>
          <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название капсулы
                  </label>
                  <Input 
                    placeholder="Мое послание в 2030..."
                    value={capsuleData.title}
                    onChange={(e) => setCapsuleData({...capsuleData, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата доставки
                  </label>
                  <Input 
                    type="date"
                    value={capsuleData.deliveryDate}
                    onChange={(e) => setCapsuleData({...capsuleData, deliveryDate: e.target.value})}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше сообщение
                </label>
                <Textarea 
                  placeholder="Напишите послание своему будущему я..."
                  className="min-h-32"
                  value={capsuleData.message}
                  onChange={(e) => setCapsuleData({...capsuleData, message: e.target.value})}
                />
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email для доставки
                </label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={capsuleData.email}
                  onChange={(e) => setCapsuleData({...capsuleData, email: e.target.value})}
                />
              </div>
              <Button className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 py-3">
                <Icon name="Send" className="mr-2" size={20} />
                Создать капсулу времени
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Capsules Gallery */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Галерея капсул
            </h3>
            <p className="text-gray-600 font-open-sans">
              Ваши сохраненные моменты времени
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {capsules.map((capsule) => (
              <Card key={capsule.id} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-montserrat">{capsule.title}</CardTitle>
                    <Badge 
                      variant={capsule.status === 'delivered' ? 'default' : capsule.status === 'active' ? 'secondary' : 'outline'}
                      className={
                        capsule.status === 'delivered' ? 'bg-green-500' :
                        capsule.status === 'active' ? 'bg-indigo-500' : 'bg-gray-400'
                      }
                    >
                      {capsule.status === 'delivered' ? 'Доставлено' :
                       capsule.status === 'active' ? 'Активно' : 'Ожидает'}
                    </Badge>
                  </div>
                  <CardDescription>
                    Доставка: {new Date(capsule.date).toLocaleDateString('ru-RU')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Icon name="Calendar" size={16} />
                    <span>{Math.ceil((new Date(capsule.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} дней до доставки</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h3>
          <p className="text-gray-600 font-open-sans mb-12">
            У вас есть вопросы? Мы готовы помочь
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">Email</h4>
              <p className="text-gray-600">support@timevault.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">Чат</h4>
              <p className="text-gray-600">Онлайн поддержка 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Icon name="Clock" className="text-white" size={20} />
              </div>
              <span className="text-xl font-montserrat font-bold">TimeVault</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика</a>
              <a href="#" className="hover:text-white transition-colors">Условия</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TimeVault. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;