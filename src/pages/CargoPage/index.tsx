import "./CargoPage.css";
import {FC, useEffect, useState} from "react";
import { CargoPageProps } from "./typing.tsx";
import {useParams} from "react-router-dom";
import {Container,Card, Col, Row, Image} from "react-bootstrap";
import {CargoList_} from "../../core/mock/CargoList.ts";
import unknownImage from "/images/noimage.webp"
import {Navbar} from "../../components/Navbar/index.tsx";
import {Breadcrumbs} from "../../components/Breadcrumbs/index.tsx";
import { Cargo } from "../../core/api/Api.ts";
import { api } from "../../core/api"
export const CargoPage: FC<CargoPageProps> = () => {
    const {id} = useParams();
    const [CargoData, setCargoData] = useState<Cargo | null>(null);
    useEffect(() => {
        if (id) {
          api.cargo.cargoRead(id)
                .then((data) => {
                  setCargoData(data.data);
                })
                .catch(() => {
                    const cargo = CargoList_.find(
                        (cargo) => cargo.pk === Number(id)
                    );
                    setCargoData(cargo || null);
                });
        }
    }, [id]);
    if (!CargoData || !CargoData.title) {
        return (
            <>
                <Navbar/>
            </>
        );
    }    
    return (
        <>
            <Navbar/>
            <Breadcrumbs
                    middleItems={[
                        {
                            name: "Каталог",
                            link: "/cargo_catalog"
                        }
                    ]}
                    endItem={CargoData?.title}
                />
            <Container className="mx-auto" style={{marginTop :"12%", height : "100%"}}>
            <Card className="mb-3 w-100  radius-0" style={{height : "100%"}}>
  <Row className="g-0 h-100">
    <Col md={4}>
      <Image className="h-100 w-100"
        src={CargoData?.logo_file_path || unknownImage}
        fluid
        alt={CargoData?.title}
      />
    </Col>
    <Col md={8} className="d-flex flex-column"> {/* Добавляем flexbox */}
      <Card.Body>
        <div className="d-flex flex-column "> {/* Выравниваем название и цену по вертикали */}
          <Card.Title className="text-start fs-4 fw-bold">{CargoData?.title}</Card.Title>
          <Card.Text className="mt-2 text-start fw-bold fs-5">
            <p className="mb-2">Цена за 1т: {CargoData?.price_per_ton}$</p>
          </Card.Text>
        </div>
        <Card.Text className="fs-5" style={{marginTop : "10px"}}>{CargoData?.description}</Card.Text>
      </Card.Body>
    </Col>
  </Row>
</Card>
</Container>


        </>
    );
};


  {/* return (
    <Card className="mb-3">
      <Row className="g-0">
        <Col md={4}>
          <Image src={imageSrc} fluid alt={title} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <p className="mb-2">Цена: {price}</p>
              <p>{description}</p>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}; */}


