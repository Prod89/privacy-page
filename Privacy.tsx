
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Shield, User, Database, Target, MessageCircle, Phone, Mail, AlertTriangle, Home, ShoppingCart, Lock, Globe, Calendar, Edit, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-foreground">นโยบายความเป็นส่วนตัว</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            นโยบายความเป็นส่วนตัว (Privacy Policy)
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ร้าน Sudprodpremium Shop มุ่งมั่นในการคุ้มครองข้อมูลส่วนบุคคลของลูกค้าทุกท่านตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Block 1: ข้อมูลที่จัดเก็บ */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Database className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 ข้อมูลที่จัดเก็บ</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ข้อมูลสมัครสมาชิก:</strong> ชื่อ-นามสกุล, เบอร์โทร, อีเมล, ที่อยู่</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ข้อมูลการสั่งซื้อ:</strong> รายการสินค้า, ยอดชำระเงิน, ที่อยู่จัดส่ง</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ข้อมูลการติดต่อ:</strong> ข้อความแชท, LINE, อีเมล</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ข้อมูลบัญชีธนาคาร:</strong> (กรณีรับค่าคอมมิชชั่นหรือคืนเงิน)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>ข้อมูลเทคนิค:</strong> IP Address, Browser, Cookies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Block 2: วัตถุประสงค์การใช้ข้อมูล */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 วัตถุประสงค์การใช้ข้อมูล</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>เพื่อการจัดส่งสินค้า</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>เพื่อสิทธิพิเศษ โปรโมชั่น คะแนนสะสม</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>เพื่อปรับปรุงบริการ วิเคราะห์การใช้งาน</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>เพื่อปฏิบัติตามข้อกฎหมาย</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Block 3: การเปิดเผยข้อมูล */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Eye className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 การเปิดเผยข้อมูล</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>ไม่ขาย ไม่เปิดเผยข้อมูลแก่บุคคลที่สาม</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>ยกเว้นจำเป็น เช่น ขนส่ง ชำระเงิน หรือคำสั่งศาล</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Block 4: สิทธิของลูกค้า */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 สิทธิของลูกค้า</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                ขอเข้าถึง แก้ไข ระงับ หรือลบข้อมูล
              </p>
              <Button asChild className="w-full">
                <Link to="/profile">จัดการข้อมูลส่วนตัว</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Block 5: ระยะเวลาการจัดเก็บ */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 ระยะเวลาการจัดเก็บ</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                จัดเก็บเท่าที่จำเป็น สามารถลบข้อมูลได้เองในระบบ
              </p>
            </CardContent>
          </Card>

          {/* Block 6: มาตรการความปลอดภัย */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Lock className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 มาตรการความปลอดภัย</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                มีระบบความปลอดภัย TLS, จำกัดสิทธิ์เข้าถึง
              </p>
            </CardContent>
          </Card>

          {/* Block 7: การใช้คุกกี้ */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 การใช้คุกกี้</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                แจ้งให้ทราบว่ามีการใช้คุกกี้สำหรับการปรับปรุงเว็บไซต์
              </p>
            </CardContent>
          </Card>

          {/* Block 8: การปรับปรุงนโยบาย */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Edit className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 การปรับปรุงนโยบาย</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                ระบุว่าปรับปรุงนโยบายเป็นระยะ โดยดูได้ที่หน้านี้
              </p>
            </CardContent>
          </Card>

          {/* Block 9: ช่องทางติดต่อ */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🟨 ช่องทางติดต่อ</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>LINE:</strong> @sudprod42
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> info@sudprodshop.com
                </p>
              </div>
              <Button asChild className="w-full">
                <Link to="/contact">ติดต่อเรา</Link>
              </Button>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Footer */}
          <Alert className="bg-primary/5 border-primary/20">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-center text-lg">
              <strong>ข้อความยืนยัน:</strong><br />
              การใช้งานเว็บไซต์ถือว่าท่านยอมรับนโยบายความเป็นส่วนตัวของ Sudprodpremium Shop ตามกฎหมาย PDPA ประเทศไทย
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
