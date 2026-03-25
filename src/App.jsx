import { useState } from "react";

const TABS = ["פוסט 📸", "CRM 📋", "דיוור ✉️"];

const LEADS = [
  { id:1, name:"משפחת יעקב", phone:"", type:"שבת משפחתית", status:"סגור ✅", notes:"43 איש, לב ירושלים" },
  { id:2, name:"קבוצה מונקו", phone:"", type:"שבת חתן", status:"קר ❄️", notes:"100 איש, עליה לתורה" },
  { id:3, name:"נעים מלכה", phone:"050-8834101", type:"שבת חתן", status:"חם 🔥", notes:"15 חדרים, נורדיה" },
];

const HOTELS = [
  { name:"מלון לב ירושלים", contact:"אביב", phone:"02-5300333", email:"aviv@levjerusalem.co.il" },
  { name:"AFI Hotels", contact:"אורי קרונקופ", phone:"052-2685939", email:"urikr@afi-hotels.co.il" },
  { name:"מלון פעמונים", contact:"ענת", phone:"", email:"service@paamonimhotel.co.il" },
  { name:"קיסר טבריה", contact:"טלי גרינברג", phone:"", email:"tbr_rsvm@caesarhotels.co.il" },
  { name:"IC Hotels", contact:"Ouday Said", phone:"", email:"resmgrshalom@ichotels.co.il" },
];

const MAILING = [
  "res@kinar.co.il","res@orchidhotels.com","midshomron@gmail.com",
  "elyamhotel@gmail.com","fd@sealifehotel.co.il","tal@atlashotels.co.il",
  "reservations@nesammim.com","reservations@satori-hotel.co.il",
  "reserve@arena-hotel.co.il","callcenter@prima.co.il",
  "reservation@gardenhotel.co.il","bayview@afi-hotels.co.il",
  "mill_events2@prima.co.il","tbr_rsvm@caesarhotels.co.il",
  "urikr@afi-hotels.co.il","aviv@levjerusalem.co.il",
  "service@paamonimhotel.co.il","office@yeshivand.com",
];

const SC = {
  "חם 🔥":{ bg:"#fff1f0", border:"#ff4d4f", color:"#cf1322" },
  "קר ❄️":{ bg:"#e6f4ff", border:"#4096ff", color:"#0958d9" },
  "סגור ✅":{ bg:"#f6ffed", border:"#52c41a", color:"#389e0d" },
};

const POST_TEXT = `💜 בתקופה הזו — מגיע לכם רגע של שקט ויחד

יחד עם משפיענים וחברות שאוהבים אתכם — הכנו הפתעות מיוחדות 🎁

🏡 וילות וצימרים
🏠 דירות נופש
💒 שבתות חתן
👨‍👩‍👧 שבתות משפחתיות
🎉 מתחמים לאירועים

אנחנו מוצאים עבורכם את המקום המושלם 🙏

📱 052-3983394
🌐 multibrawn.co.il

🇮🇱 שיהיו לנו בשורות טובות בקרוב`;

const WA_TEXT = `💜 שלום עוקבי MULTIBRAWN!

בתקופה הזו אנחנו כאן 🏡

🏡 וילות וצימרים
🏠 דירות נופש
💒 שבתות חתן
👨‍👩‍👧 שבתות משפחתיות
🎉 מתחמים לאירועים

📱 052-3983394
🌐 multibrawn.co.il

🇮🇱 שיהיו לנו בשורות טובות בקרוב`;

function CopyBtn({ text, label }) {
  const [done, setDone] = useState(false);
  function go() { navigator.clipboard.writeText(text); setDone(true); setTimeout(()=>setDone(false),2000); }
  return <button onClick={go} style={{ width:"100%", background:done?"#52c41a":"linear-gradient(135deg,#6b21a8,#a855f7)", color:"#fff", border:"none", borderRadius:12, padding:13, fontSize:14, fontWeight:800, cursor:"pointer", marginTop:10 }}>{done?"✅ הועתק!":label}</button>;
}

function wa(phone, name) {
  const msg = encodeURIComponent(`שלום ${name}, כאן ערדית מ-Multibrawn 👋\nיש לי משהו מתאים עבורכם!\n📱 052-3983394`);
  const p = phone.replace(/\D/g,""); const intl = p.startsWith("0")?"972"+p.slice(1):p;
  window.open(`https://wa.me/${intl}?text=${msg}`,"_blank");
}

function mailTo(email, type) {
  const s = type==="hotel"?"שיתוף פעולה — Multibrawn":"נמצא נכס מתאים — Multibrawn";
  const b = type==="hotel"?"שלום,\n\nכאן ערדית בראון מ-Multibrawn.\nיש לי לקוחות מתאימים — נשמח לשתף פעולה.\n\nערדית | 052-3983394":"שלום,\n\nמצאתי עבורכם נכס מתאים!\n\nערדית | 052-3983394";
  window.open(`mailto:${email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`,"_blank");
}

export default function App() {
  const [tab, setTab] = useState("פוסט 📸");
  return (
    <div style={{ minHeight:"100vh", background:"#f5f0ff", fontFamily:"Arial, sans-serif", direction:"rtl" }}>

      <div style={{ background:"linear-gradient(135deg,#6b21a8,#a855f7)", padding:"16px 20px 12px", textAlign:"center" }}>
        <div style={{ fontSize:24, fontWeight:900, color:"#fff", letterSpacing:3 }}>MULTI<span style={{ color:"#f0a0ff" }}>BRAWN</span></div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.8)", marginTop:2 }}>ערדית בראון | מרכז שליטה</div>
      </div>

      <div style={{ display:"flex", background:"#fff", borderBottom:"2px solid #e9d5ff" }}>
        {TABS.map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{ flex:1, padding:"12px 0", border:"none", background:"none", cursor:"pointer", fontSize:13, fontWeight:700, color:tab===t?"#6b21a8":"#999", borderBottom:tab===t?"3px solid #6b21a8":"3px solid transparent", marginBottom:-2 }}>{t}</button>
        ))}
      </div>

      <div style={{ padding:16, maxWidth:480, margin:"0 auto" }}>

        {tab==="פוסט 📸" && (
          <div>
            <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"0 8px 30px rgba(107,33,168,0.2)", marginBottom:16 }}>
              <div style={{ background:"linear-gradient(135deg,#6b21a8,#a855f7)", padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ fontSize:18, fontWeight:900, color:"#fff", letterSpacing:2 }}>MULTI<span style={{ color:"#f0a0ff" }}>BRAWN</span></div>
                <div style={{ background:"rgba(255,255,255,0.25)", borderRadius:20, padding:"3px 10px", fontSize:11, color:"#fff", fontWeight:700 }}>💜 בגלל המצב</div>
              </div>
              <div style={{ height:160, background:"linear-gradient(135deg,#3a0060,#6b21a8)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6 }}>
                <div style={{ fontSize:36 }}>📸</div>
                <div style={{ fontSize:13, color:"rgba(255,255,255,0.8)", fontWeight:700 }}>הוסיפי את התמונה שלך</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.5)" }}>ערדית בראון | מייסדת Multibrawn</div>
              </div>
              <div style={{ background:"linear-gradient(135deg,#4a0080,#7c3aed)", padding:"16px 16px 14px" }}>
                <div style={{ fontSize:18, fontWeight:900, color:"#fff", lineHeight:1.4, marginBottom:10, textAlign:"center" }}>
                  בתקופה הזו — מגיע לכם<br/><span style={{ color:"#f0a0ff" }}>רגע של שקט ויחד 💜</span>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginBottom:12 }}>
                  {["💒 שבתות חתן","🏡 וילות וצימרים","🏠 דירות נופש","👨‍👩‍👧 שבתות משפחתיות","🎉 מתחמים לאירועים"].map(i=>(
                    <div key={i} style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:10, padding:7, fontSize:11, color:"#fff", fontWeight:600, textAlign:"center" }}>{i}</div>
                  ))}
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", borderTop:"1px solid rgba(255,255,255,0.2)", paddingTop:10 }}>
                  <div style={{ fontSize:13, fontWeight:900, color:"#fff", direction:"ltr" }}>📱 052-3983394</div>
                  <div style={{ fontSize:12, color:"#f0a0ff", fontWeight:700 }}>🌐 multibrawn.co.il</div>
                </div>
              </div>
              <div style={{ background:"#4a0080", padding:10, textAlign:"center" }}>
                <div style={{ fontSize:12, color:"#fff", fontWeight:700 }}>🇮🇱 שיהיו לנו בשורות טובות בקרוב</div>
              </div>
            </div>
            <div style={{ background:"#fff", borderRadius:12, padding:14, border:"1px solid #e9d5ff" }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#6b21a8", marginBottom:8 }}>📝 טקסט לפרסום:</div>
              <div style={{ fontSize:12, color:"#444", lineHeight:1.9, whiteSpace:"pre-line" }}>{POST_TEXT}</div>
            </div>
            <CopyBtn text={POST_TEXT} label="📋 העתק טקסט לפייסבוק"/>
          </div>
        )}

        {tab==="CRM 📋" && (
          <div>
            <div style={{ fontSize:14, fontWeight:800, color:"#6b21a8", marginBottom:10 }}>👑 לקוחות ופניות</div>
            {LEADS.map(l=>(
              <div key={l.id} style={{ background:"#fff", borderRadius:12, padding:"12px 14px", marginBottom:8, border:"1px solid #f0eaff", boxShadow:"0 2px 8px rgba(107,33,168,0.07)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                  <div style={{ fontWeight:800, fontSize:14 }}>{l.name}</div>
                  <span style={{ background:SC[l.status]?.bg, border:`1px solid ${SC[l.status]?.border}`, color:SC[l.status]?.color, borderRadius:20, padding:"2px 10px", fontSize:11, fontWeight:700 }}>{l.status}</span>
                </div>
                <div style={{ fontSize:12, color:"#888" }}>🎉 {l.type}</div>
                <div style={{ fontSize:11, color:"#aaa", marginTop:2, fontStyle:"italic" }}>{l.notes}</div>
                {l.phone && <button onClick={()=>wa(l.phone,l.name)} style={{ marginTop:8, background:"#25d366", color:"#fff", border:"none", borderRadius:8, padding:"6px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>💬 וואטסאפ</button>}
              </div>
            ))}
            <div style={{ fontSize:14, fontWeight:800, color:"#0958d9", margin:"16px 0 10px" }}>🏨 מלונות ונכסים</div>
            {HOTELS.map(h=>(
              <div key={h.name} style={{ background:"#fff", borderRadius:12, padding:"12px 14px", marginBottom:8, border:"1px solid #e6f4ff" }}>
                <div style={{ fontWeight:800, fontSize:14, marginBottom:3 }}>{h.name}</div>
                <div style={{ fontSize:12, color:"#888" }}>👤 {h.contact} {h.phone&&`· 📱 ${h.phone}`}</div>
                <div style={{ display:"flex", gap:6, marginTop:8 }}>
                  {h.phone && <button onClick={()=>wa(h.phone,h.contact)} style={{ background:"#25d366", color:"#fff", border:"none", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:700, cursor:"pointer" }}>💬</button>}
                  {h.email && <button onClick={()=>mailTo(h.email,"hotel")} style={{ background:"#4096ff", color:"#fff", border:"none", borderRadius:8, padding:"6px 12px", fontSize:12, fontWeight:700, cursor:"pointer" }}>✉️</button>}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab==="דיוור ✉️" && (
          <div>
            <div style={{ background:"#fff", borderRadius:12, padding:14, border:"1px solid #e9d5ff", marginBottom:4 }}>
              <div style={{ fontSize:13, fontWeight:800, color:"#6b21a8", marginBottom:10 }}>📬 רשימת מיילים — {MAILING.length} נמענים</div>
              {MAILING.map(e=>(
                <div key={e} style={{ fontSize:12, color:"#555", padding:"5px 0", borderBottom:"1px solid #f5f0ff" }}>{e}</div>
              ))}
            </div>
            <CopyBtn text={MAILING.join(", ")} label="📋 העתק כל הכתובות"/>
            <div style={{ background:"#fff", borderRadius:12, padding:14, border:"1px solid #e9d5ff", marginTop:12 }}>
              <div style={{ fontSize:13, fontWeight:800, color:"#6b21a8", marginBottom:8 }}>💬 הודעת וואטסאפ לקהילה</div>
              <div style={{ fontSize:12, color:"#444", lineHeight:1.9, whiteSpace:"pre-line" }}>{WA_TEXT}</div>
            </div>
            <CopyBtn text={WA_TEXT} label="📋 העתק הודעת וואטסאפ"/>
          </div>
        )}
      </div>
    </div>
  );
}
