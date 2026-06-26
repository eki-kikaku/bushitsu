// 各駅に subName (副駅名) を追加し、読みの五十音順でソートしています。
const allStations = [
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "あびこ", kana: "あびこ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/谷町線", name: "天王寺", kana: "てんのうじ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/中央線/四つ橋線", name: "本町", kana: "ほんまち", subName: "船場西" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/千日前線/四つ橋線", name: "なんば", kana: "なんば", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/長堀鶴見緑地線", name: "心斎橋", kana: "しんさいばし", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "昭和町", kana: "しょうわちょう", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "新金岡", kana: "しんかなおか", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/堺筋線", name: "動物園前", kana: "どうぶつえんまえ", subName: "新世界" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "中津", kana: "なかつ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "なかもず", kana: "なかもず", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "長居", kana: "ながい", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "西田辺", kana: "にしたなべ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "梅田", kana: "うめだ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/谷町線", name: "東梅田", kana: "ひがしうめだ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線/四つ橋線", name: "大国町", kana: "だいこくちょう", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "江坂", kana: "えさか", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "淀屋橋", kana: "よどやばし", subName: "市役所前" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "北花田", kana: "きたはなだ", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "新大阪", kana: "しんおおさか", subName: "" },
    { pref: "大阪府", company: "大阪市高速電気軌道", line: "御堂筋線", name: "東三国", kana: "ひがしみくに", subName: "" }
].sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));