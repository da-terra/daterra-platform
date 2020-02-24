import { useQuery } from "@apollo/react-hooks";
import {
  INotification,
  IQuickscanResult,
  IUser,
  createPath
} from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { Route } from "react-router";
import RoutePath from "../../../../data/RoutePath";
import Header from "../../../blocks/Header";
import { CardMenu, CardMenuDivider, CardMenuLink } from "../../../CardMenu";
import SplashScreen from "../../../general/SplashScreen";
import { WrapperWidth } from "../../../general/Wrapper";
import Circle from "../../../util/Circle";
import { Content, PageWrapper } from "./styled";
import { LinkButton } from "../../../general/Button";
import Card from "../../../util/Card";
import { Table, TableRow, TableCell } from "../../../general/Table";

const QuickscanResult = React.lazy(() => import("../QuickscanResult"));
const organizationsQuery = loader("./quickscanResults.graphql");

type QueryResponse = {
  me: IUser;
  notifications: INotification[];
  quickscanResults: IQuickscanResult[];
};

const QuickscanResults = () => {
  const { loading, data, error } = useQuery<QueryResponse>(organizationsQuery);

  if (error) {
    throw error;
  }

  if (loading || data == null) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <Circle x={20} y={-30} />

      <Header me={data?.me} notifications={data?.notifications || []} />

      <PageWrapper width={WrapperWidth.Normal}>
        <CardMenu>
          <CardMenuLink href={RoutePath.Cms.QuickscanResults}>
            <FormattedMessage id="Users_LinkList_QuickscanResults" />
          </CardMenuLink>

          <CardMenuLink href={RoutePath.Cms.QuickscanQuestions}>
            <FormattedMessage id="Users_LinkList_QuickscanQuestions" />
          </CardMenuLink>

          <CardMenuDivider />

          <CardMenuLink href={RoutePath.Cms.Articles}>
            <FormattedMessage id="Users_LinkList_Articles" />
          </CardMenuLink>

          <CardMenuLink href={RoutePath.Cms.Events}>
            <FormattedMessage id="Users_LinkList_Events" />
          </CardMenuLink>

          <CardMenuDivider />

          <CardMenuLink href={RoutePath.Cms.Organizations}>
            <FormattedMessage id="Users_LinkList_Organizations" />
          </CardMenuLink>

          <CardMenuDivider />

          <CardMenuLink href={RoutePath.Cms.Projects}>
            <FormattedMessage id="Users_LinkList_Projects" />
          </CardMenuLink>

          <CardMenuLink href={RoutePath.Cms.ProjectStates}>
            <FormattedMessage id="Users_LinkList_ProjectStates" />
          </CardMenuLink>
        </CardMenu>

        <Content>
          {data.quickscanResults.map(quickscanResult => (
            <Card>
              <Table>
                <TableRow>
                  <TableCell>Bedrijfsnaam</TableCell>
                  <TableCell>{quickscanResult.company.companyName}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Sector</TableCell>
                  <TableCell>{quickscanResult.company.sector}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Website</TableCell>
                  <TableCell>
                    <LinkButton
                      href={quickscanResult.company.website}
                      target="_blank"
                      external
                      italic
                    >
                      {quickscanResult.company.website}
                    </LinkButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Werknemers</TableCell>
                  <TableCell>{quickscanResult.company.employeeCount}</TableCell>
                </TableRow>
              </Table>

              <LinkButton
                href={createPath(
                  RoutePath.QuickscanProfile,
                  quickscanResult as any
                )}
              >
                Bekijk profiel
              </LinkButton>
            </Card>
          ))}
        </Content>
      </PageWrapper>

      <Route path={RoutePath.Cms.QuickscanResult} component={QuickscanResult} />
    </Fragment>
  );
};

export default QuickscanResults;
