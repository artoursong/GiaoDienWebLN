import { useEffect, useState } from "react";
import Container from "components/Container";
import SectionDivider from "components/Section/SectionDivider";
import bookService from "api/truyenAPI";

const BannedUser = () => {
  const [bannedList, setBannedList] = useState([]);

  useEffect(() => {
    const fetchBanUser = async () => {
      const response = await bookService.getBannedList();

      if (response.status === 200) {
        setBannedList(response.data);
      }
    };

    fetchBanUser();
  }, []);

  const handleUnbanUser = async (id) => {
    const response = await bookService.unbanUser(id);

    if (response.status === 200) {
      setBannedList(response.data);
    }
  };

  return (
    <div>
      <SectionDivider>
        <Container size="max-w-[940px]">
          {bannedList.length > 0 ? (
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow-md sm:rounded-lg">
                    <table className="min-w-full table-fixed">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th
                            scope="col"
                            className="w-[40%] py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                          >
                            Tên truyện
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                          >
                            Lượt thích
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-400"
                          >
                            Tình trạng
                          </th>

                          <th scope="col" className="relative py-3 px-6">
                            <span className="sr-only">Thao tác</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bannedList.map((person) => (
                          <tr
                            key={person.iD_Ban}
                            className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                          >
                            <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                              <h2 classNameName="font-medium text-light-gray">
                                {person.username}
                              </h2>
                            </td>
                            <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                              {person.comment_Text}
                            </td>
                            <td className="whitespace-nowrap py-4 px-6 text-right text-sm font-medium">
                              <button
                                className="rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-700 hover:text-indigo-900"
                                onClick={() => {
                                  handleUnbanUser(person.iD_User);
                                }}
                              >
                                Unban
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-light-gray">
              Không có thành viên nào bị ban
            </p>
          )}
        </Container>
      </SectionDivider>
    </div>
  );
};

export default BannedUser;
