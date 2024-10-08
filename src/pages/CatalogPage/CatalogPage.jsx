import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVehicles,
  selectIsLoadingVehicles,
} from "../../redux/vehicles/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import VehiclesList from "../../components/VehiclesList/VehiclesList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import FiltrationForm from "../../components/FiltrationForm/FiltrationForm";
import Loader from "../../components/common/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoadingVehicles);
  const vehicles = useSelector(selectVehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles({ page: 1, reset: true }));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <div className={css["page-layout"]}>
          <FiltrationForm />
          <div className={css.catalog}>
            <VehiclesList vehicles={vehicles} />
            <LoadMoreButton />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
