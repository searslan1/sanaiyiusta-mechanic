import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Bell, Globe, Lock, Moon, Shield } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/profile" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Ayarlar</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <div className="space-y-6">
          {/* Notification Settings */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Bell className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="font-medium text-gray-900">Bildirim Ayarları</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Randevu Hatırlatıcıları</p>
                    <p className="text-xs text-gray-500">Yaklaşan randevular için bildirimler</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Bakım Hatırlatıcıları</p>
                    <p className="text-xs text-gray-500">Araç bakım zamanları için bildirimler</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Kampanya Bildirimleri</p>
                    <p className="text-xs text-gray-500">Özel teklifler ve indirimler</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Sistem Bildirimleri</p>
                    <p className="text-xs text-gray-500">Uygulama güncellemeleri ve duyurular</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="font-medium text-gray-900">Gizlilik Ayarları</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Konum Paylaşımı</p>
                    <p className="text-xs text-gray-500">Yakındaki ustaları bulmak için konum paylaşımı</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Veri Analizi</p>
                    <p className="text-xs text-gray-500">
                      Uygulama iyileştirmeleri için kullanım verilerinin paylaşımı
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Kişiselleştirilmiş Reklamlar</p>
                    <p className="text-xs text-gray-500">İlgi alanlarınıza göre özelleştirilmiş reklamlar</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* App Settings */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="font-medium text-gray-900">Uygulama Ayarları</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Dil</p>
                    <p className="text-xs text-gray-500">Uygulama dili</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Türkçe
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Karanlık Mod</p>
                    <p className="text-xs text-gray-500">Uygulama teması</p>
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-4 h-4 mr-2 text-gray-500" />
                    <Switch />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Otomatik Güncelleme</p>
                    <p className="text-xs text-gray-500">Uygulama güncellemelerini otomatik indir</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <Lock className="w-5 h-5 text-blue-600 mr-3" />
                <h3 className="font-medium text-gray-900">Hesap Ayarları</h3>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Şifre Değiştir
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  İki Faktörlü Doğrulama
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  Bağlı Hesaplar
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Hesabı Sil
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-xs text-gray-500">
            <p>Uygulama Versiyonu: 1.0.0</p>
            <div className="mt-2 space-x-2">
              <Link href="#" className="text-blue-600">
                Gizlilik Politikası
              </Link>
              <span>•</span>
              <Link href="#" className="text-blue-600">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
