import os
import re

lang_dir = "/Users/javi/Documents/GitHub/website/src/assets/lang"

translations = {
    "en": '\\"Get serious about **securing** your important data. Internxt was born with the ambition of giving people true **freedom online** by creating a more **ethical**, **secure**, **private**, and responsible digital world.\\"',
    "es": '\\"Tómate en serio la **seguridad** de tus datos importantes. Internxt nació con la ambición de darle a las personas verdadera **libertad online** creando un mundo digital más **ético**, **seguro**, **privado** y responsable.\\"',
    "de": '\\"Nehmen Sie die **Sicherung** Ihrer wichtigen Daten ernst. Internxt wurde mit dem Ziel gegründet, den Menschen wahre **Freiheit online** zu geben, indem eine **ethischere**, **sicherere**, **privatere** und verantwortungsvollere digitale Welt geschaffen wird.\\"',
    "fr": '\\"Prenez au sérieux la **sécurisation** de vos données importantes. Internxt est né avec l\'ambition de donner aux gens une véritable **liberté en ligne** en créant un monde numérique plus **éthique**, **sûr**, **privé** e responsable.\\"',
    "it": '\\"Prendi sul serio la **sicurezza** dei tuoi dati importanti. Internxt è nato con l\'ambizione di dare alle persone la vera **libertà online** creando un mondo digitale più **etico**, **sicuro**, **privato** e responsabile.\\"',
    "ru": '\\"Отнеситесь серьезно к **защите** своих важных данных. Internxt был создан с целью дать людям настоящую **свободу в сети**, создав более **этичный**, **безопасный**, **приватный** и ответственный цифровой мир.\\"',
    "zh": '\\"认真对待您的重要数据的**安全**。Internxt 的诞生是为了通过创造一个更**合乎道德**、**安全**、**隐私**和负责任的数字世界，赋予人们真正的**在线自由**。\\"',
    "zh-tw": '\\"認真對待您的重要數據的**安全**。Internxt 的誕生是為了通過創造一個更**合乎道德**、**安全**、**隱私**和負責任的數字世界，賦予人們真正的**在線自由**。\\"',
    "ar": '\\"تعامل بجدية مع **تأمين** بياناتك المهمة. وُلِدت Internxt بطموح منح الأشخاص **حرية حقيقية عبر الإنترنت** من خلال إنشاء عالم رقمي أكثر **أخلاقية** و**أمانًا** و**خصوصية** ومسؤولية.\\"',
    "id": '\\"Anggap serius **pengamanan** data penting Anda. Internxt lahir dengan ambisi untuk memberikan **kebebasan online** yang sesungguhnya kepada orang-orang dengan menciptakan dunia digital yang lebih **etis**, **aman**, **pribadi**, dan bertanggung jawab.\\"',
    "nl": '\\"Neem de **beveiliging** van uw belangrijke gegevens serieus. Internxt is geboren met de ambitie om mensen echte **online vrijheid** te geven door een meer **ethische**, **veilige**, **privé** en verantwoordelijke digitale wereld te creëren.\\"',
    "pt-br": '\\"Leve a sério a **segurança** dos seus dados importantes. O Internxt nasceu com a ambição de dar às pessoas verdadeira **liberdade online** ao criar um mundo digital mais **ético**, **seguro**, **privado** e responsável.\\"'
}

modified_files = 0
for lang in os.listdir(lang_dir):
    d = os.path.join(lang_dir, lang)
    if os.path.isdir(d) and lang in translations:
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith('.json'):
                    path = os.path.join(root, file)
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    if '"mashable"' in content:
                        print(f"Found mashable in {path}")
                        # Regex replacement
                        new_val = '"' + translations[lang] + '"'
                        new_content = re.sub(
                            r'("mashable"\s*:\s*)"(?:\\.|[^"\\])*"',
                            r'\g<1>' + new_val.replace('\\', '\\\\'),
                            content
                        )
                        if new_content != content:
                            with open(path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"Updated {path}")
                            modified_files += 1
                        else:
                            print("Content unchanged")

print(f"Total modified files: {modified_files}")
