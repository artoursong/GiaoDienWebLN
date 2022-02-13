import SectionHeader from "components/Section/SectionHeader";
import SectionDivider from "components/Section/SectionDivider";

import React from "react";

const Description = () => {
  return (
    <SectionDivider>
      <div className="mb-4">
        <SectionHeader>Tóm tắt</SectionHeader>
      </div>

      <p className="text-lg leading-relaxed text-[#c9e1f8]">
        Iwatani Naofumi, một thanh niên người Nhật dễ tính, được triệu tập vào
        một thế giới song song cùng với ba chàng trai trẻ khác từ các vũ trụ
        song song để trở thành Tứ Đại Hiệp Sĩ và chiến đấu với lũ quái vật đa
        chiều gọi là Làn sóng (Nami). Mỗi anh hùng lần lượt được trang bị trang
        bị Vũ Khí Huyền Thoại của riêng mình khi được triệu tập. Naofumi tình cờ
        nhận được Khiên Huyền Thoại, trang bị phòng thủ duy nhất, trong khi các
        anh hùng khác nhận được kiếm, thương và cung, vũ khí dùng để tấn công.
        Không giống như các anh hùng khác, họ được quốc vương hỗ trợ đầy đủ và
        có được nhiều đồng minh mạnh, Naofumi lại bị coi thường và chỉ nhận được
        vài đồng tiền trợ cấp ít ỏi.
      </p>
    </SectionDivider>
  );
};

export default Description;
