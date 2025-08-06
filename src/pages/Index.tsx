import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [coverData, setCoverData] = useState({
    artistName: '',
    albumTitle: '',
    genre: '',
    mood: '',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('synthwave');

  const musicStyles = [
    { 
      id: 'synthwave', 
      name: 'Synthwave', 
      description: 'Неоновые цвета и ретро-футуризм',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'hiphop', 
      name: 'Hip-Hop', 
      description: 'Уличная эстетика и граффити',
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'electronic', 
      name: 'Electronic', 
      description: 'Абстрактные формы и светящиеся элементы',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'rock', 
      name: 'Rock/Metal', 
      description: 'Темные тона и мощная энергетика',
      color: 'from-gray-700 to-black'
    },
    { 
      id: 'indie', 
      name: 'Indie', 
      description: 'Минимализм и винтажные оттенки',
      color: 'from-emerald-400 to-teal-600'
    },
    { 
      id: 'jazz', 
      name: 'Jazz', 
      description: 'Элегантность и золотые акценты',
      color: 'from-amber-400 to-orange-600'
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Молниеносная генерация',
      description: 'Получите уникальную обложку за считанные секунды'
    },
    {
      icon: 'Palette',
      title: 'Множество стилей',
      description: 'От synthwave до jazz — выберите идеальный стиль'
    },
    {
      icon: 'Download',
      title: 'Высокое качество',
      description: 'Скачивайте обложки в разрешении 3000x3000px'
    },
    {
      icon: 'Heart',
      title: 'Полностью бесплатно',
      description: 'Без подписок, регистраций и скрытых платежей'
    }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Имитация процесса генерации
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Music" className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-montserrat font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CoverAI
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-open-sans transition-colors">Главная</a>
              <a href="#generator" className="text-gray-700 hover:text-purple-600 font-open-sans transition-colors">Генератор</a>
              <a href="#styles" className="text-gray-700 hover:text-purple-600 font-open-sans transition-colors">Стили</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-600 font-open-sans transition-colors">Галерея</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-open-sans transition-colors">О сервисе</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-10 animate-gradient-x"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6">
                Создай <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">идеальную</span>
                <br />обложку альбома
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-open-sans">
                ИИ-генератор обложек для музыкантов. Бесплатно, быстро и профессионально. 
                Создавайте уникальные обложки за секунды!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Создать обложку
                </Button>
                <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl transform -rotate-6 opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center">
                  <Icon name="Disc3" className="text-white animate-spin" size={120} style={{ animationDuration: '8s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Почему выбирают CoverAI?
            </h3>
            <p className="text-gray-600 font-open-sans">
              Профессиональные обложки для любого музыкального жанра
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={24} />
                  </div>
                  <h4 className="font-montserrat font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600 font-open-sans text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Music Styles Section */}
      <section id="styles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Выберите музыкальный стиль
            </h3>
            <p className="text-gray-600 font-open-sans">
              Каждый жанр имеет свою уникальную эстетику
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicStyles.map((style) => (
              <Card 
                key={style.id} 
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedStyle === style.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <CardContent className="p-6">
                  <div className={`w-full h-32 bg-gradient-to-br ${style.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <Icon name="Music2" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-lg font-montserrat mb-2">{style.name}</CardTitle>
                  <CardDescription className="font-open-sans">{style.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Генератор обложек
            </h3>
            <p className="text-gray-600 font-open-sans">
              Заполните информацию о вашем альбоме и получите уникальную обложку
            </p>
          </div>
          <Card className="shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя исполнителя
                  </label>
                  <Input 
                    placeholder="The Weeknd"
                    value={coverData.artistName}
                    onChange={(e) => setCoverData({...coverData, artistName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название альбома
                  </label>
                  <Input 
                    placeholder="After Hours"
                    value={coverData.albumTitle}
                    onChange={(e) => setCoverData({...coverData, albumTitle: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Жанр
                  </label>
                  <Select onValueChange={(value) => setCoverData({...coverData, genre: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите жанр" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pop">Pop</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="hiphop">Hip-Hop</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="classical">Classical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Настроение
                  </label>
                  <Select onValueChange={(value) => setCoverData({...coverData, mood: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите настроение" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="energetic">Энергичное</SelectItem>
                      <SelectItem value="melancholic">Меланхоличное</SelectItem>
                      <SelectItem value="romantic">Романтичное</SelectItem>
                      <SelectItem value="aggressive">Агрессивное</SelectItem>
                      <SelectItem value="peaceful">Спокойное</SelectItem>
                      <SelectItem value="mysterious">Мистическое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительное описание
                </label>
                <Textarea 
                  placeholder="Опишите вашу концепцию обложки: цвета, объекты, атмосферу..."
                  className="min-h-24"
                  value={coverData.description}
                  onChange={(e) => setCoverData({...coverData, description: e.target.value})}
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 py-4 text-lg"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader" className="mr-2 animate-spin" size={20} />
                    Генерирую обложку...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" className="mr-2" size={20} />
                    Создать обложку бесплатно
                  </>
                )}
              </Button>

              {isGenerating && (
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Icon name="Info" size={16} />
                    <span className="text-sm font-open-sans">
                      ИИ анализирует вашу концепцию и создает уникальную обложку...
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Галерея созданных обложек
            </h3>
            <p className="text-gray-600 font-open-sans">
              Вдохновитесь работами других музыкантов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Icon name="Play" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-montserrat font-semibold mb-1">Album Title {item}</h4>
                  <p className="text-sm text-gray-600">Artist Name</p>
                  <Badge className="mt-2 bg-purple-100 text-purple-700">Synthwave</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              Посмотреть все обложки
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-6">
            О сервисе CoverAI
          </h3>
          <p className="text-xl text-gray-600 font-open-sans mb-8 leading-relaxed">
            CoverAI — это бесплатный ИИ-генератор обложек для музыкантов всех уровней. 
            Мы верим, что у каждого артиста должна быть возможность создать профессиональную 
            обложку для своего альбома без больших затрат.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">50,000+</h4>
              <p className="text-gray-600">Довольных музыкантов</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Image" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">200,000+</h4>
              <p className="text-gray-600">Созданных обложек</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-white" size={24} />
              </div>
              <h4 className="font-montserrat font-semibold mb-2">4.9/5</h4>
              <p className="text-gray-600">Средняя оценка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Icon name="Music" className="text-white" size={20} />
                </div>
                <span className="text-xl font-montserrat font-bold">CoverAI</span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Бесплатный ИИ-генератор обложек для музыкантов
              </p>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Продукт</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Генератор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стили</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Галерея</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Багрепорт</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="MessageCircle" className="text-white" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Music" className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CoverAI. Все права защищены. Сделано с ❤️ для музыкантов</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;