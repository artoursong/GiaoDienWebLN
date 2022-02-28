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

  const handleBanUser = async (id) => {
    const response = await bookService.unbanUser(id);

    if (response.status === 200) {
      setBannedList(response.data);
    }
  };

  return (
    <div>
      <SectionDivider>
        <Container size="max-w-[940px]">
          <div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            User
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Bình luận
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {bannedList.length > 0 ? (
                          <>
                            {bannedList.map((person) => (
                              <tr key={person.iD_Ban}>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">
                                      {person.username}
                                    </div>
                                  </div>
                                </td>
                                <td className="max-w-[400px] px-6 py-4 ">
                                  <p className="break-normal text-sm text-gray-900 line-clamp-2">
                                    {person.comment_Text}
                                  </p>
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                  <button
                                    className="rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-700 hover:text-indigo-900"
                                    onClick={() => {
                                      handleBanUser(person.iD_User);
                                    }}
                                  >
                                    Unban
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionDivider>
    </div>
  );
};

export default BannedUser;
